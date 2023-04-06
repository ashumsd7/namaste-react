// import resObject from "../utils/mockData";
import { useState } from "react";
import ResCard from "./ResCard";
const Body = () => {
  let listOfRes = [
    {
      name: "Dominos",
      id:123443,
      cuisines: ["Sweets", "Snacks", "Indian"],
      deliveryTime: "45",
      avgRating: "2.3",
      costForTwoString: "200 Rs for two",
      cloudinaryImageId: "hrqoquclmgqnxrie5bu4",
    },
    {
      name: "KFC",
      id:2434243,
      cuisines: ["Rice", "Poha", "Indian"],
      deliveryTime: "25",
      avgRating: "4.6",
      costForTwoString: "1200 Rs for two",
      cloudinaryImageId: "hrqoquclmgqnxrie5bu4",
    },
    {
        name: "MCD",
        id:243424233,
        cuisines: ["Rice", "Poha", "Burger"],
        deliveryTime: "25",
        avgRating: "4.1",
        costForTwoString: "350 Rs for two",
        cloudinaryImageId: "hrqoquclmgqnxrie5bu4",
      },
  ];

  const [data, reset]= useState('hi')
//   console.log(data, reset)

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // this is a cb fun will be called on click
            //Filter
            listOfRes = listOfRes.filter((res) => res.avgRating > 4);
            console.log('listOfRes',listOfRes)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* res-card */}
        {listOfRes.map((res) => {
          return <ResCard key={res.id} resObject={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
