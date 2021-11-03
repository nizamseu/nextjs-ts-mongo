import {connectToDatabase} from "../../lib/mongodb"
const ObjectId = require('mongodb').ObjectID


export default async function handler(req:any,res:any){
    const id = req.query
    const {db} = await connectToDatabase();
    const collection = await db.collection("users")
   const result= await collection.findOne({_id:ObjectId(id.id)})
   console.log(result);
    res.json(result)
}


