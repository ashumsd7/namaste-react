import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";


const ResMenu = () => {
  const params = useParams();
  const resData = useRestaurant(params.id);
  const online= useOnline()

  console.log("resData", resData);


  if (!online) {
    return <h1>🟥You are offline please check your internet</h1>;
  }

  return (
    <div>
      <h1> Res ID : {params.id}</h1>
      <h2>My Res ; {resData?.followers}</h2>
    </div>
  );
};

export default ResMenu;
