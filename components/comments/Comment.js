import classes from "./Comment.module.css";

const Comment = ({ comment }) => {

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
        <p>{comment.content} </p>

        <div className={classes.vote}>
          <button>+</button>
          <span>{comment.score}</span>
          <button>-</button>
        </div>
      </div>
    </li>
  );
};

export default Comment;
