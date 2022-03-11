const {MongoClient} = require('mongodb');
require('dotenv').config();
const dbURI = process.env.MONGO_CREDENTIALS;

async function handler(req, res) {
    if(req.method === 'POST') {
        const client = await MongoClient.connect(dbURI);
        const db = client.db();
        const commentsCollection = db.collection('comments');
        await commentsCollection.insertOne(req.body);
        res.status(201).json({message: 'it worked'});

    }
}


export default handler;
