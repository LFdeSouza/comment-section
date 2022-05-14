import React from "react";

const Modal = ({ deleteComment, closeModal, commentData }) => {
  const { id, commentArrIndex, replyArrIndex } = commentData;
  {
  }
  return (
    <div className="fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-black/40">
      <div className=" fixed top-1/2 left-1/2 h-[14rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 space-y-3 rounded-lg bg-white p-8">
        <h1 className="text-2xl font-bold text-gray-700">Delete comment</h1>
        <p className="text-gray-500">
          Are you sure you want to delete this comment? This will remove the
          comment and cannot be undone.
        </p>
        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => closeModal({ isOpen: false })}
            className="rounded bg-grayishBlue py-3 px-9 text-sm font-semibold text-white"
          >
            NO, CANCEL
          </button>
          <button
            onClick={() => deleteComment(id, commentArrIndex, replyArrIndex)}
            className="rounded bg-softRed py-3 px-9 text-sm font-semibold text-white"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
