// import resObject from "../utils/mockData";
import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import axios from "axios";
import { Link } from "react-router-dom";
const Body = () => {
  console.log("Re render");

  const [allRes, setAllRes] = useState([]);
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  // let search = "KFC";
  const [searchText, setSearchText] = useState("KFC");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log('I am use Effect')
    getRes();
  }, []);

  async function getRes() {
    setIsLoading(true);
    const data = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = data.data
    console.log(json)
    console.log(json.data?.cards[2]?.data.data.cards);
    setListOfRes(json.data?.cards[2]?.data.data.cards);
    setAllRes(json.data?.cards[2]?.data.data.cards);
    setFilteredRes(json.data?.cards[2]?.data.data.cards);
    setIsLoading(false);
  }

  const onChangeInput = (e) => {
    // console.log(e.target.value);
    setSearchText(e.target.value);
  };

  const style={
    backgroundColor: 'red'
  }

  const filterData = (searchText, listOfRes) => {
    console.log(searchText, listOfRes);
    // console.log('>>>>>>>',listOfRes.filter((rest) => rest.name.includes(searchText)))
    return allRes.filter((rest) => rest.data.name.includes(searchText));
  };

  if (!allRes && !isLoading) return;
  if ((filteredRes.length == 0) & !isLoading)
    return <>No Restaurant are found</>;

  return filterData.length > 0 && !isLoading ? (
    <>
      <div className="body">
       
        <div>
          <div className="search-container p-5 bg-pink-50 my-5 flex justify-between">
           <div>
           <input
              type="text"
              className="search-input p-2 m-2 rounded-lg"
              placeholder="search"
              value={searchText}
              onChange={(e) => {
                onChangeInput(e);
              }}
            ></input>
            <button
         
              className=" p-2 m-2 bg-purple-900 text-white rounded-lg"
              onClick={() => {
                //write filter function
                const data = filterData(searchText, allRes);
                setFilteredRes(data);
              }}
            >
              {" "}
              Search
            </button>
           </div>
            <div className="filter flex justify-center items-center">
            <button
              className="filter-btn p-2 m-2 bg-purple-900 text-white rounded-lg"
              onClick={() => {
                // this is a cb fun will be called on click
                //Filter
                const filteredList = listOfRes.filter(
                  (res) => Number(res.data?.avgRating) > 4
                );
                console.log("filteredList", filteredList);
                setFilteredRes(filteredList);
              }}
            >
              Top Rated Restaurant
            </button>
          </div>
          </div>
          
        </div>
        <div className=" flex flex-wrap justify-around rounded-sm">
          {/* res-card */}
          {filteredRes.map((res) => {
            return (
              <Link to={`/restaurant/${res.data.id}`}>
                <ResCard key={res.id} resObject={res?.data} />;
              </Link>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <Shimmer />
  );
};

export default Body;
