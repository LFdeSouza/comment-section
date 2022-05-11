import React from "react";
import picture from "../assets/images/avatars/image-amyrobson.png";

const Comment = ({ user, content, date, score }) => {
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
    <div className="mx-auto w-11/12 rounded-md bg-white p-4">
      <div className="flex items-center gap-4">
        <img src={picture} alt="avatar" className="h-8 w-8" />
        <h1 className="font-bold">amyrobson</h1>
        <p className="text-gray-500">1 month ago</p>
      </div>
      <p className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        adipisci? Maiores unde omnis enim nesciunt harum, molestiae, ipsam
        quisquam praesentium voluptatibus eveniet laudantium placeat!
        Necessitatibus ullam voluptatem possimus velit sequi.
      </p>

      <div className="mt-2 flex  items-center justify-between">
        <div className="flex w-fit items-center justify-center gap-4 rounded-lg bg-lightGray py-2 px-4">
          <i className="cursor-pointer">{iconPlus}</i>
          <p className=" font-bold text-moderateBlue">12</p>
          <i className="cursor-pointer">{iconMinus}</i>
        </div>
        <p className="flex cursor-pointer items-center gap-2 font-bold text-moderateBlue">
          {iconReply}Reply
        </p>
      </div>
    </div>
  );
};

export default Comment;
