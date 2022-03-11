import { MongoClient } from 'mongodb';
import Head from "next/head";
import CommentsList from "../components/comments/CommentsList";
import AddComment from "../components/CommentsForm/AddComment";

export default function Home({comments}) {
 
  return (
    <>
      <Head>
        <title>Comment</title>
      </Head>
      <main>
        <CommentsList comments={comments}/>
        <AddComment/>
      </main>
    </>
  );
}

export async function getStaticProps() {
  require('dotenv').config();
  const dbURI = process.env.MONGO_CREDENTIALS;

  const client = await MongoClient.connect(dbURI);
  const db = client.db();
  const commentsCollection = db.collection('comments');

  const comments = await commentsCollection.find().toArray();
  client.close();

  return {
    props: {
      comments: comments.map(comment => ({
        id: comment._id.toString(),
        content: comment.content,
        score: comment.score,
        createdAt: comment.createdAt,
        user: comment.user
      }))
    },

    revalidate: 1
  }
}