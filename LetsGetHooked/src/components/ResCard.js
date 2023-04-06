
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const ResCard = (props) => {
  console.log(props);

  const { name, cuisines, sla, totalRatings, costForTwoString } =
    props.resObject;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={`https://res.cloudinary.com/swiggy/image/upload/${props.resObject.cloudinaryImageId}`}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines?.join(",")}</h4>
      <h4>{totalRatings} Stars</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      <h4>{costForTwoString} mins</h4>
    </div>
  );
};

export default ResCard;
