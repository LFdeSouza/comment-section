import React from "react";

const Comment = ({ user, content, createdAt, score, replies }) => {
  //import image;

  const iconPlus = (
    <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
        fill="#C5C6EF"
      />
    </svg>
  );

  const iconMinus = (
    <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
        fill="#C5C6EF"
      />
    </svg>
  );

  const iconReply = (
    <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
        fill="#5357B6"
      />
    </svg>
  );

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mx-auto flex w-11/12 flex-col rounded-md bg-white p-4 sm:flex-row sm:items-start sm:gap-4 sm:p-6 md:w-full">
        <div className="sm:order-2">
          <div className="flex items-center gap-4">
            <img
              src={require(`../assets/images/avatars/image-${user.username}.png`)}
              alt="avatar"
              className="h-10 w-10"
            />
            <h1 className="font-bold">{user.username}</h1>
            <p className="text-gray-500">{createdAt}</p>
            <p className="ml-auto hidden cursor-pointer items-center gap-2 font-bold text-moderateBlue sm:flex">
              {iconReply}Reply
            </p>
          </div>
          <p className="mt-4 text-gray-500">{content}</p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex w-fit items-center justify-center gap-4 rounded-lg bg-lightGray py-2 px-4 sm:min-h-[7.5rem] sm:flex-col sm:p-2">
            <i className=" flex h-4 w-4 cursor-pointer items-center justify-center">
              {iconPlus}
            </i>
            <p className=" font-bold text-moderateBlue">{score}</p>
            <i className="flex h-4 w-4 cursor-pointer items-center justify-center">
              {iconMinus}
            </i>
          </div>
          <p className="flex cursor-pointer items-center gap-2 font-bold text-moderateBlue sm:hidden">
            {iconReply}Reply
          </p>
        </div>
      </div>

      <div className="mt-5 ml-6 border-l-2 border-lightGrayishBlue sm:ml-10 sm:pl-10">
        {replies &&
          replies.map((reply, index) => (
            <Comment
              user={reply.user}
              content={reply.content}
              createdAt={reply.createdAt}
              score={reply.score}
              replies={[]}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Comment;
