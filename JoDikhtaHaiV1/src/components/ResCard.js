import { CDN_URL } from "../utils/constant.js";



const ResCard = (props) => {
  // console.log(props);

  const { name, cuisines, deliveryTime, avgRating, costForTwoString } =
    props.resObject;

  return (
    <div className="w-56 min-h-[400px] p-2 m-2 shadow-md overflow-x-clip bg-pink-50 rounded-md" >
      <img
        className="res-logo"
        src={`${CDN_URL}${props.resObject.cloudinaryImageId}`}

      ></img>
      <h3 className="font-bold text-xl">{name}</h3>
      <h4>{cuisines?.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{costForTwoString} mins</h4>
    </div>
  );
};

export default ResCard;
