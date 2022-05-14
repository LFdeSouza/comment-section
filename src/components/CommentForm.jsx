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
      className="mx-auto min-h-[10rem] w-11/12 rounded-lg bg-white p-6 md:w-full"
      onSubmit={(e) => onSubmit(e)}
    >
      <div className="grid grid-cols-3 items-center gap-2 sm:flex sm:items-start">
        <textarea
          name="content"
          value={content}
          onChange={(e) => onChange(e.target.value)}
          className="  col-span-3 w-full resize-none rounded border-2 border-lightGrayishBlue p-2 sm:order-2"
          rows="4"
          placeholder="Add a comment..."
        ></textarea>

        <img
          src={require(`../assets/images/avatars/image-${user.username}.png`)}
          alt="avatar"
          className=" col-span-2 h-10 w-10 sm:order-1"
        />
        <button
          type="submit"
          className=" rounded-lg bg-moderateBlue px-4 py-3 text-white sm:order-3 sm:px-6"
        >
          SEND
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
