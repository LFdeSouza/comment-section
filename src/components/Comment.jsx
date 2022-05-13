import React, { useState } from "react";
import Moment from "react-moment";
import { iconPlus, iconMinus, iconReply } from "./icons";
import CommentForm from "./CommentForm";

const Comment = ({ comment, updateScore, index, addComment }) => {
  const { user, content, createdAt, score, replies, id } = comment;
  const [replyForm, setReplyForm] = useState(false);

  return (
    <>
      <div className="mx-auto flex w-11/12 flex-col rounded-md bg-white p-4 sm:flex-row sm:items-start sm:gap-4 sm:p-6 md:w-full">
        <div className="w-full sm:order-2">
          <div className="flex items-center gap-4">
            <img
              src={require(`../assets/images/avatars/image-${user.username}.png`)}
              alt="avatar"
              className="h-10 w-10"
            />
            <h1 className="font-bold">{user.username}</h1>
            <p className="text-gray-500">
              {<Moment fromNow>{new Date(createdAt)}</Moment>}
            </p>
            <p
              onClick={() => setReplyForm(!replyForm)}
              className="ml-auto hidden cursor-pointer items-center gap-2 font-bold text-moderateBlue sm:flex"
            >
              {iconReply}Reply
            </p>
          </div>
          <p className="mt-4 text-gray-500">{content}</p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex w-fit items-center justify-center gap-4 rounded-lg bg-lightGray py-2 px-4 sm:min-h-[7.5rem] sm:flex-col sm:p-2">
            <i
              onClick={() => updateScore(id, index, "add")}
              className=" flex h-4 w-4 cursor-pointer items-center justify-center"
            >
              {iconPlus}
            </i>
            <p className=" font-bold text-moderateBlue">{score}</p>
            <i
              onClick={() => updateScore(id, index, "subtract")}
              className="flex h-4 w-4 cursor-pointer items-center justify-center"
            >
              {iconMinus}
            </i>
          </div>
          <p
            onClick={() => setReplyForm(!replyForm)}
            className="flex cursor-pointer items-center gap-2 font-bold text-moderateBlue sm:hidden"
          >
            {iconReply}Reply
          </p>
        </div>
      </div>
      <div className="my-5">
        {replyForm && (
          <CommentForm
            addComment={addComment}
            replyingTo={comment.replyingTo}
            index={index}
          />
        )}
      </div>
      <div className="mt-5 ml-6 border-l-2 border-lightGrayishBlue sm:ml-10 sm:pl-10">
        {replies &&
          replies.map((reply) => (
            <Comment
              comment={reply}
              key={reply.id}
              updateScore={updateScore}
              index={index}
              addComment={addComment}
            />
          ))}
      </div>
    </>
  );
};

export default Comment;
