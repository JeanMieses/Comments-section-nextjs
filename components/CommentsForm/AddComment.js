import { useState } from "react";
import { useRouter } from 'next/router';
import classes from "./AddComment.module.css";

const AddComment = () => {
  const router = useRouter()
  const [comment, setComment] = useState("");

  const commentHandler = (e) => {
    setComment(e.target.value);
  };

  const onSubmitHandler = async(e) => {
    e.preventDefault();

    await fetch('/api/new-comment/', {
      method: 'POST',
      body: JSON.stringify({
        content: comment,
        score: 0,
        createdAt: '2 days ago',
        user: {
          username: 'Someone1234'
        }
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    })

    setComment("");
    router.replace('/');
  };

  return (
    <div className={classes.addComment}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="comment"></label>
        <textarea
          value={comment}
          onChange={commentHandler}
          required
          id="comment"
          placeholder="Add a comment"
        />
        <div>
          <img
            className={classes.profileImg}
            alt="place holder"
            src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="
          />
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
