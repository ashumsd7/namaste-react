import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const params = useParams();

  useEffect(() => {

    getResInfo()
   
  }, []);


  async function getResInfo(){
    // const data= await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229')
    // const json=await data.json()

    // console.log('json',json)

    console.error('SWIGGY API NOW WORKING')

  }

  return (
    <div>
      <h1> Res ID : {params.id}</h1>
      <h2>My Res</h2>
    </div>
  );
};

export default ResMenu;
