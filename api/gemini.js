function pickBestModel(list) {
  const models = list?.models || [];

  // 1) Priorité: modèles Gemini supportant generateContent
  const candidates = models.filter(m =>
    (m.name || "").includes("gemini") &&
    (m.supportedGenerationMethods || []).includes("generateContent")
  );

  // 2) Si possible, préfère un "flash" (rapide/cheap)
  const flash = candidates.find(m => (m.name || "").toLowerCase().includes("flash"));
  return (flash || candidates[0] || models[0])?.name || null;
}

export default async function handler(req, res) {
  // CORS / preflight
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      return res.status(200).json({ text: "MODE DEMO: clé API manquante.", mode: "demo" });
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const prompt = (body.prompt || body.text || "").toString().trim();
    if (!prompt) {
      return res.status(200).json({ text: "MODE DEMO: prompt vide.", mode: "demo" });
    }

    // 1) modèle forcé si tu veux
    let model = (process.env.GEMINI_MODEL || "").trim();

    // 2) sinon, on liste les modèles et on choisit le meilleur compatible
    if (!model) {
      const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(key)}`;
      const lr = await fetch(listUrl);
      const list = await lr.json();
      if (!lr.ok) {
        return res.status(200).json({
          text: list?.error?.message || "MODE DEMO: ListModels failed.",
          mode: "demo"
        });
      }
      model = pickBestModel(list);
    }

    if (!model) {
      return res.status(200).json({ text: "MODE DEMO: aucun modèle compatible trouvé.", mode: "demo" });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/${model}:generateContent?key=${encodeURIComponent(key)}`;

    const payload = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.4, maxOutputTokens: 512 }
    };

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await r.json();

    const text =
      data?.candidates?.[0]?.content?.parts?.map(p => p.text).filter(Boolean).join("") ||
      data?.error?.message ||
      "Aucune réponse exploitable.";

    return res.status(200).json({
      text,
      mode: r.ok ? "live" : "demo",
      model
    });
  } catch (e) {
    return res.status(200).json({
      text: "MODE DEMO: Gemini indisponible (erreur serveur).",
      mode: "demo",
      error: String(e)
    });
  }
}
