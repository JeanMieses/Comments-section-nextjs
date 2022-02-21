import Comment from "./Comment";
import data from "./../../data.json";

console.log(data);

const CommentsList = () => {
  return (
    <ul>
      {data.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
