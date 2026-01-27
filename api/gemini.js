export default async function handler(req, res) {
  // CORS (au cas où)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const prompt = (body.prompt || "").toString().trim();

    if (!prompt) {
      return res.status(200).json({ text: "Entrez une demande (ex: 'loi 25', 'audit', 'ville').", mode: "demo" });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      // IMPORTANT: on retourne 200 + demo pour éviter le catch côté front
      return res.status(200).json({
        text: "MODE DEMO: GEMINI_API_KEY manquante dans Vercel (Project Settings → Environment Variables).",
        mode: "demo"
      });
    }

    // Modèle stable côté Generative Language API
    const model = process.env.GEMINI_MODEL || "gemini-1.5-flash";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 450
        }
      })
    });

    const data = await r.json().catch(() => ({}));

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.error?.message ||
      "Aucune réponse exploitable.";

    // Même si Gemini renvoie une erreur, on reste en 200 pour garder l'UI vivante
    return res.status(200).json({
      text,
      mode: r.ok ? "live" : "demo"
    });
  } catch (err) {
    return res.status(200).json({
      text: "MODE DEMO: Gemini indisponible (erreur serveur).",
      mode: "demo"
    });
  }
}
