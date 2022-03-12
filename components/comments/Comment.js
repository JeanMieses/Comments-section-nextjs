import { useState } from "react";
import { useRouter } from "next/router";
import Edit from "./Edit";
import classes from "./Comment.module.css";

const Comment = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const deletetHandler = async () => {
    await fetch("/api/delete-comment", {
      method: "DELETE",
      body: JSON.stringify({ id: comment.id }),
      headers: {
        "Content-Type": "application/json",
        'Accept':'application/json'
      },
    });
    router.replace("/");
  };

  const isEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <li className={classes.post}>
      <div className={classes.user}>
        <img
          className={classes.profileImg}
          alt="place holder"
          src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="
        />
        <span className={classes.username}>{comment.user.username}</span>
        <span className={classes.createdAt}> {comment.createdAt} </span>
      </div>

      <div className={classes.content}>
        {!isEditing && <p>{comment.content} </p>}
        {isEditing && (
          <Edit
            setIsEditing={setIsEditing}
            id={comment.id}
            text={comment.content}
          />
        )}

        {!isEditing && (
          <span className={classes.vote}>
            <button>+</button>
            <span>{comment.score}</span>
            <button>-</button>
          </span>
        )}

        {!isEditing && (
          <span className={classes.userOptions}>
            <button onClick={deletetHandler}>
              <img src="https://img.icons8.com/plasticine/filled-trash.png" />{" "}
              delete
            </button>
            <button onClick={isEditingHandler}>
              <img src="https://img.icons8.com/material/24/000000/edit--v1.png" />{" "}
              edit
            </button>
          </span>
        )}
      </div>
    </li>
  );
};

export default Comment;
