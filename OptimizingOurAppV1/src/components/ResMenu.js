import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

const ResMenu = () => {
  const params = useParams();
  const resData= useRestaurant(params.id)

  console.log('resData',resData)


  return (
    <div>
      <h1> Res ID : {params.id}</h1>
      <h2>My Res ; {resData.followers}</h2>
    </div>
  );
};

export default ResMenu;
