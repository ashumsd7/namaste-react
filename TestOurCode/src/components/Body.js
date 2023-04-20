// import resObject from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Body = () => {
  console.log("Re render");

  const [allRes, setAllRes] = useState([]);
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  // let search = "KFC";
  const [searchText, setSearchText] = useState("KFC");
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    // console.log('I am use Effect')
    getRes();
  }, []);

  async function getRes() {
    setIsLoading(true);
    const data = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = data.data;
    console.log(json);
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
      <div className=" bg-cyan-200">
        <div>
          <div className="search-container p-5 bg-cyan-100  flex justify-between">
            <div>
              <input
                type="text"
                className="search-input p-2 w-[150px] m-2 rounded-lg focus:bg-green-50"
                placeholder="search"
                value={searchText}
                onChange={(e) => {
                  onChangeInput(e);
                }}
              ></input>
              <button
                data-testid="search-btn"
                className=" p-2 m-2 w-[100px] bg-purple-900 text-white rounded-lg"
                onClick={() => {
                  //write filter function
                  const data = filterData(searchText, allRes);
                  setFilteredRes(data);
                }}
              >
                {" "}
                Search
              </button>

              <input
                type="text"
                className="search-input p-2 w-[150px] m-2 rounded-lg focus:bg-green-50"
                placeholder="search"
                value={user.name}
                onChange={(e) => {
                  setUser({
                    name: e.target.value,
                    email: "new@example.com",
                  });
                }}
              ></input>
            </div>
            <div className="filter flex justify-center items-center">
              <button
                className="filter-btn p-2 m-2 bg-cyan-500 text-white rounded-lg"
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
        <div className=" flex flex-wrap justify-around rounded-sm" data-testid='res-list'>
          {/* res-card */}
          {filteredRes.map((res, idx) => {
            return (
              <Link to={`/restaurant/${res.data.id}`} key={idx}>
                <ResCard key={res.id} resObject={res?.data} />;
              </Link>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <div>
      {" "}
      <h1>ASHUUUUUUUUUU</h1>
      <Shimmer />
    </div>
  );
};

export default Body;
