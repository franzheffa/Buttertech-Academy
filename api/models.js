export default async function handler(req, res) {
  try {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      return res.status(200).json({ ok: false, error: "Missing GEMINI_API_KEY" });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(key)}`;
    const r = await fetch(url);
    const data = await r.json();

    if (!r.ok) {
      return res.status(200).json({ ok: false, error: data?.error?.message || "ListModels failed", raw: data });
    }

    const models = (data.models || []).map(m => ({
      name: m.name,
      displayName: m.displayName,
      methods: m.supportedGenerationMethods || []
    }));

    return res.status(200).json({ ok: true, count: models.length, models });
  } catch (e) {
    return res.status(200).json({ ok: false, error: String(e) });
  }
}
