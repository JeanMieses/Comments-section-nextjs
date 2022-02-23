import Head from "next/head";
import CommentsList from "../components/comments/CommentsList";
import AddComment from "../components/CommentsForm/AddComment";

export default function Home() {
  return (
    <>
      <Head>
        <title>Comment</title>
      </Head>
      <main>
        <CommentsList />
        <AddComment/>
      </main>
    </>
  );
}
