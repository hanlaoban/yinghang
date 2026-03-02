export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const response = await fetch("https://tcrnh58yq5.coze.site/run", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + process.env.COZE_TOKEN,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.status(200).json(data);
}
