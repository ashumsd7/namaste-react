import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  console.log("params", params.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-5 py-2 ">
      <iframe
        className="rounded-lg overflow-hidden shadow-lg "
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${params.get("v")}`}
        title="YouTube video player"
        frameborder="0"
        autoPlay
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default WatchPage;
