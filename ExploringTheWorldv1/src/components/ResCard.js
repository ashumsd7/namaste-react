import { CDN_URL } from "../utils/constant.js";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const ResCard = (props) => {
  // console.log(props);

  const { name, cuisines, deliveryTime, avgRating, costForTwoString } =
    props.resObject;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={`${CDN_URL}${props.resObject.cloudinaryImageId}`}

      ></img>
      <h3>{name}</h3>
      <h4>{cuisines?.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{costForTwoString} mins</h4>
    </div>
  );
};

export default ResCard;
