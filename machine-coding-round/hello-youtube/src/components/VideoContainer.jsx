import React, { useEffect, useState } from "react";
import YOUTUBE_URL from "../utils/constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

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
      {videoList.length && <AdVideoCard info={videoList[0]} />}
      {videoList?.map((item, idx) => (
        <Link to={`/watch?v=${item.id}`}>
          {" "}
          <VideoCard info={item} key={idx} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
