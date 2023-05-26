import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="mx-6 mt-4">
      <ButtonList />
      <VideoContainer/>
    </div>
  );
};

export default MainContainer;
