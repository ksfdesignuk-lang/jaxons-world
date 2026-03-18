export default async function handler(req, res) {
  const { question } = req.body;

  res.status(200).json({
    answer: "You asked: " + question
  });
}
