import classes from "./Comment.module.css";

const Comment = ({ comment }) => {

  console.log(comment);
  return (
    <li className={classes.post}>
      <div className={classes.user}>
        <img
          className={classes.profileImg}
          alt="place holder"
          src="https://cdn.icon-icons.com/icons2/2643/PNG/512/man_boy_people_avatar_user_person_black_skin_tone_icon_159355.png"
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
