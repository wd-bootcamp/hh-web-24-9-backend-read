import dbConnect from "@/db/connect";
import Joke from "@/db/models/Joke";

export default async function handler(request, response) {
  // 1. connect to MongoDB
  await dbConnect();

  // const id = request.query.id;
  const { id } = request.query;

  // 2. Use the model "Joke" to find a specific joke
  const joke = await Joke.findById(id);

  if (!joke) {
    response.status(404).json({ message: "joke not found." });
    return;
  }

  response.json(joke);
}
