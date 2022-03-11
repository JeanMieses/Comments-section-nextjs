import Comment from "./Comment";
import classes from './CommentsList.module.css'

const CommentsList = ({comments}) => {
  return (
    <ul className={classes.list}>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
