import dbConnect from "@/db/connect";
import Joke from "@/db/models/Joke";

export default async function handler(request, response) {
  // 1. connect with mongoDB Atlas
  await dbConnect();

  // 2. use the "Model" to find all jokes
  const jokes = await Joke.find();

  console.log(jokes);

  response.status(200).json(jokes);
}
