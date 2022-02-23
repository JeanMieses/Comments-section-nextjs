import { useState } from "react";
import classes from "./AddComment.module.css";

const AddComment = () => {
  const [comment, setComment] = useState("");

  const commentHandler = (e) => {
    setComment(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(comment);
    setComment("");
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
            src="https://cdn.icon-icons.com/icons2/2643/PNG/512/man_boy_people_avatar_user_person_black_skin_tone_icon_159355.png"
          />
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
