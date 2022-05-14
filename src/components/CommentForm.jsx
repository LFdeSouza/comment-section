import React, { useState, useContext } from "react";
import { UserContext } from "../App";

const CommentForm = ({
  addComment,
  replyingTo,
  commentArrIndex,
  closeReplyForm,
}) => {
  const user = useContext(UserContext);
  const [content, setContent] = useState("");

  const onChange = (content) => {
    setContent(content);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (content === "") return;
    addComment(user, content, commentArrIndex, replyingTo);
    setContent("");
    if (closeReplyForm) {
      closeReplyForm(false);
    }
  };

  return (
    <form
      className="mx-auto min-h-[10rem] w-11/12 rounded-lg bg-white p-8 sm:w-full"
      onSubmit={(e) => onSubmit(e)}
    >
      <div className="flex items-start justify-start gap-3">
        <img
          src={require(`../assets/images/avatars/image-${user.username}.png`)}
          alt="avatar"
          className="h-10 w-10"
        />

        <textarea
          name="content"
          value={content}
          onChange={(e) => onChange(e.target.value)}
          className=" w-full resize-none rounded border-2 border-lightGrayishBlue p-2"
          rows="3"
          placeholder="Add a comment..."
        ></textarea>
        <button
          type="submit"
          className=" rounded-lg bg-moderateBlue px-6 py-2 text-white"
        >
          SEND
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
