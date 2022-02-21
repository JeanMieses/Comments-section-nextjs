import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CommentsList from '../components/comments/CommentsList';


export default function Home() {
  return (<>
    <CommentsList />
  </>
  )
}
