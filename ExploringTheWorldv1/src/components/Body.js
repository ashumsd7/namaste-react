// import resObject from "../utils/mockData";
import { useState, useEffect } from "react";
import ResCard from "./ResCard";
const Body = () => {
  console.log('Re render')
  let listOfRes2 = [
    {
      name: "Dominos",
      id: 123443,
      cuisines: ["Sweets", "Snacks", "Indian"],
      deliveryTime: "45",
      avgRating: "2.3",
      costForTwoString: "200 Rs for two",
      cloudinaryImageId: "hrqoquclmgqnxrie5bu4",
    },
    {
      name: "KFC",
      id: 2434243,
      cuisines: ["Rice", "Poha", "Indian"],
      deliveryTime: "25",
      avgRating: "4.6",
      costForTwoString: "1200 Rs for two",
      cloudinaryImageId: "hrqoquclmgqnxrie5bu4",
    },
    {
      name: "MCD",
      id: 243424233,
      cuisines: ["Rice", "Poha", "Burger"],
      deliveryTime: "25",
      avgRating: "4.1",
      costForTwoString: "350 Rs for two",
      cloudinaryImageId: "hrqoquclmgqnxrie5bu4",
    },
  ];

  const [listOfRes, setListOfRes] = useState(listOfRes2);
  // let search = "KFC";
  const [searchText, setSearchText] = useState("KFC");


  useEffect(()=>{
    console.log('I am use Effect')
  })

  const onChangeInput = (e) => {
    // console.log(e.target.value);
    setSearchText(e.target.value);
  };

  const filterData = (searchText, listOfRes) => {
    // console.log('>>>>>>>',listOfRes.filter((rest) => rest.name.includes(searchText)))
    return listOfRes.filter((rest) => rest.name.includes(searchText));
  };
  return (
    <div className="body">
      <div style={{ display: "flex", gap: 10, margin: 8 }}>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              onChangeInput(e);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              //write filter function
              const data = filterData(searchText, listOfRes);
              setListOfRes(data);
            }}
          >
            {" "}
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              // this is a cb fun will be called on click
              //Filter
              const filteredList = listOfRes.filter((res) => res.avgRating > 4);
              // console.log('listOfRes',listOfRes)
              setListOfRes(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
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
