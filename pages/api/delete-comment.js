const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();
const dbURI = process.env.MONGO_CREDENTIALS;

async function handler(req, res) {
  if (req.method === "DELETE") {
    const client = await MongoClient.connect(dbURI);
    const db = client.db();
    const commentsCollection = db.collection("comments");
    await commentsCollection.findOneAndDelete({ _id: ObjectId(req.body.id) });
    res.status(200).json({ message: "Delete!" });
  }
}

export default handler;
