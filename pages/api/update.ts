import { connectToDatabase } from "../../lib/mongodb";
const ObjectId = require("mongodb").ObjectID;

export default async function handler(req: any, res: any) {
  const data = req.body;
  const id = req.query.id;

  const { db } = await connectToDatabase();
  const collection = await db.collection("users");

  const options = { upsert: true };
  const filter = { _id: ObjectId(id) };

  const updatedUser = {
    $set: {
      name: data.name,
      email: data.email,
      age: data.age,
    },
  };

  const result = await collection.updateOne(filter, updatedUser, options);

  res.json(result);
}
