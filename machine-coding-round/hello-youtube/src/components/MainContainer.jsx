import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import YOUTUBE_URL from "../utils/constant";

const MainContainer = () => {

  return (
    <div className="px-6 pt-4">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
