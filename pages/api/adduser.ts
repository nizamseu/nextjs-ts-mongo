import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req: any, res: any) {
  const data = req.body.user;
  const { db } = await connectToDatabase();
  const collection = await db.collection("users");
  const result = await collection.insertOne(data);
  console.log(result);

  res.json(result);
}
