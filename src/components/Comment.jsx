import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import Moment from "react-moment";
import { PlusIcon, MinusIcon, CrudIcons } from "./Icons";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  commentArrIndex,
  replyArrIndex,
  updateScore,
  addComment,
  onDelete,
  editComment,
}) => {
  const { user, content, createdAt, score, replies, id } = comment;
  const currUser = useContext(UserContext);
  const [replyForm, setReplyForm] = useState(false);
  const [updateForm, setUpdateForm] = useState({ isOpen: false, content });

  const onChange = (value) => setUpdateForm({ ...updateForm, content: value });

  const onSubmit = (e) => {
    e.preventDefault();
    editComment(updateForm.content, commentArrIndex, replyArrIndex);
    setUpdateForm({ ...updateForm, isOpen: false });
  };

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
            <CrudIcons
              replyForm={replyForm}
              setReplyForm={setReplyForm}
              onDelete={onDelete}
              commentArrIndex={commentArrIndex}
              replyArrIndex={replyArrIndex}
              id={id}
              currUser={currUser.username}
              user={user.username}
              updateForm={updateForm}
              setUpdateForm={setUpdateForm}
            />
          </div>

          {updateForm.isOpen ? (
            <form
              onSubmit={(e) => onSubmit(e)}
              className="flex flex-col items-end"
            >
              <textarea
                onChange={(e) => onChange(e.target.value)}
                className="mt-4 w-full resize-none rounded border-2 border-lightGrayishBlue p-2"
                value={updateForm.content}
                rows="3"
              />
              <button
                className="mt-2 rounded bg-moderateBlue py-2 px-4 text-white "
                type="submit"
              >
                UPDATE
              </button>
            </form>
          ) : (
            <p className="mt-4 text-gray-500">
              <span className="text-lg font-semibold text-moderateBlue">
                {comment.replyingTo && `@${comment.replyingTo} `}
              </span>
              {content}
            </p>
          )}
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex w-fit items-center justify-center gap-4 rounded-lg bg-lightGray py-2 px-4 sm:min-h-[7.5rem] sm:flex-col sm:p-2">
            <PlusIcon
              updateScore={updateScore}
              id={id}
              commentArrIndex={commentArrIndex}
            />
            <p className=" font-bold text-moderateBlue">{score}</p>
            <MinusIcon
              updateScore={updateScore}
              id={id}
              commentArrIndex={commentArrIndex}
            />
          </div>
          <CrudIcons
            replyForm={replyForm}
            setReplyForm={setReplyForm}
            onDelete={onDelete}
            commentArrIndex={commentArrIndex}
            replyArrIndex={replyArrIndex}
            id={id}
            currUser={currUser.username}
            user={user.username}
            lower={true}
            updateForm={updateForm}
            setUpdateForm={setUpdateForm}
          />
        </div>
      </div>

      <div className="my-5">
        {replyForm && (
          <CommentForm
            addComment={addComment}
            replyingTo={user.username}
            closeReplyForm={setReplyForm}
            commentArrIndex={commentArrIndex}
          />
        )}
      </div>

      <div className="mt-5 ml-6 border-l-2 border-lightGrayishBlue sm:ml-10 sm:pl-10">
        {replies &&
          replies.map((reply, index) => (
            <Comment
              comment={reply}
              key={reply.id}
              updateScore={updateScore}
              commentArrIndex={commentArrIndex}
              addComment={addComment}
              onDelete={onDelete}
              replyArrIndex={index}
              editComment={editComment}
            />
          ))}
      </div>
    </>
  );
};

export default Comment;
