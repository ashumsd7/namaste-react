import React from "react";

const VideoCard = ({ info }) => {
  const { statistics, snippet } = info;
  console.log("info", statistics, snippet);
  console.log(">statistics", statistics);
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className=" rounded-xl w-72 border shadow-lg overflow-hidden cursor-pointer">
      <img src={thumbnails?.medium?.url} alt={channelTitle} />
      <ul className="py-2 flex flex-col gap-1 px-2">
        <li className="font-bold items-center flex gap-2">
          {" "}
          <img
            src={thumbnails?.medium?.url}
            className="h-8 w-8 rounded-full"
            alt="avatar"
          />{" "}
          {title}
        </li>

        <li className="ml-10 text-sm">{channelTitle}</li>
        <li className="text-xs ml-10 font-mono">{viewCount} Views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="hover:bg-red-500 hover:opacity-50 hover:scale-95 border overflow-hidden duration-200">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
