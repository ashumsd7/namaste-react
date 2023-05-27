import React, { useEffect, useState } from "react";
import YOUTUBE_URL from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_URL);
    const { items } = await data.json();
    console.log("items:", items);
    setVideoList(items);
  };
  return (
    <div className="my-6 flex gap-4 flex-wrap">
      {videoList?.map((item, idx) => (
        <VideoCard info={item} key={idx} />
      ))}
    </div>
  );
};

export default VideoContainer;
