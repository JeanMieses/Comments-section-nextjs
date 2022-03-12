const { MongoClient } = require("mongodb");
require("dotenv").config();
const ObjectId = require("mongodb").ObjectId;
const dbURI = process.env.MONGO_CREDENTIALS;

async function handler(req, res) {
  if (req.method === "PATCH") {
    const {updateContent, id} = req.body;
    const client = await MongoClient.connect(dbURI);
    const db = client.db();
    const commentsCollection = db.collection("comments");
    await commentsCollection.findOneAndUpdate({_id: ObjectId(id)}, {$set: {content: updateContent}})
    res.status(200).json({ message: "Updated!" });
  }
}

export default handler;
