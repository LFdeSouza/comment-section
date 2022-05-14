import React from "react";

const Modal = ({ deleteComment, closeModal, commentData }) => {
  const { id, commentArrIndex, replyArrIndex } = commentData;

  return (
    <div className="fixed inset-0 z-50 w-screen overflow-hidden bg-black/40">
      <div className=" fixed top-1/2 left-1/2 min-h-[14rem] w-11/12 max-w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8">
        <h1 className="text-2xl font-bold text-gray-700">Delete comment</h1>
        <p className="text-gray-500">
          Are you sure you want to delete this comment? This will remove the
          comment and cannot be undone.
        </p>
        <div className="flex items-center justify-between gap-3 pt-4">
          <button
            onClick={() => closeModal({ isOpen: false })}
            className="rounded bg-grayishBlue py-4 px-6 text-sm font-semibold text-white sm:py-5 sm:px-9"
          >
            NO, CANCEL
          </button>
          <button
            onClick={() => deleteComment(id, commentArrIndex, replyArrIndex)}
            className="rounded bg-softRed py-4 px-6 text-sm font-semibold text-white sm:py-5 sm:px-9"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
