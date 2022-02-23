import Comment from "./Comment";
import data from "./../../data.json";
import classes from './CommentsList.module.css'

// console.log(data);

const CommentsList = () => {
  return (
    <ul className={classes.list}>
      {data.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
