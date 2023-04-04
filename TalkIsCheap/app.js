//create nested elements
import React from "react";
import ReactDOM from "react-dom/client";

const resObject = [
  {
    type: "F",
    id: "522648",
    name: "Prabhat sweet and Bakers",
    uuid: "c69a3c72-cdc8-4d5c-a182-9f48e04e6f38",
    city: "10215",
    area: "Subhash Nagar",
    totalRatingsString: "Too Few Ratings",
    cloudinaryImageId: "hrqoquclmgqnxrie5bu4",
    cuisines: ["Sweets", "Snacks", "Indian"],
    tags: [],
    costForTwo: 19900,
    costForTwoString: "₹199 FOR TWO",
    deliveryTime: 30,
    minDeliveryTime: 30,
    maxDeliveryTime: 30,
    slaString: "30 MINS",
    lastMileTravel: 1.7000000476837158,
    slugs: {
      restaurant: "prabhat-sweet-and-bakers-subhash-nagar-subhash-nagar",
      city: "faizabad",
    },
    cityState: "10215",
    address: "Naka Hanumangarhi Faizabad - 224001",
    locality: "Gandhinagar",
    parentId: 311884,
    unserviceable: true,
    veg: true,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    chain: [],
    feeDetails: {
      fees: [
        {
          name: "time",
          fee: 0,
          message: "",
        },
        {
          name: "distance",
          fee: 500,
          message: "",
        },
        {
          name: "special",
          fee: 0,
          message: "",
        },
      ],
      totalFees: 500,
      message: "",
      title: "Delivery Charge",
      amount: "500",
      icon: "",
    },
    availability: {
      opened: false,
      nextOpenMessage: "Opens next at 10 am, today",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "1.7 kms",
    hasSurge: false,
    sla: {
      restaurantId: "522648",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      lastMileTravel: 1.7000000476837158,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE_WITH_BANNER",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: false,
    avgRating: "--",
    totalRatings: 0,
    new: false,
  },
  {
    type: "F",
    id: "674767",
    name: "Ayodhya cakes",
    uuid: "c2d33ea6-cb5b-4b6c-9c6e-33c6994b4615",
    city: "10215",
    area: "Subhash Nagar",
    totalRatingsString: "Too Few Ratings",
    cloudinaryImageId: "beba8b68deea5d9e28c01b43024a82af",
    cuisines: ["Bakery"],
    tags: [],
    costForTwo: 20000,
    costForTwoString: "₹200 FOR TWO",
    deliveryTime: 20,
    minDeliveryTime: 20,
    maxDeliveryTime: 20,
    slaString: "20 MINS",
    lastMileTravel: 1.100000023841858,
    slugs: {
      restaurant: "ayodhya-cakes-subhash-nagar-subhash-nagar",
      city: "faizabad",
    },
    cityState: "10215",
    address:
      "50/149,6/ 11/26, Haidarganj, Faizabad, Haiderganj, Faizabad, ( NPP- Zone-3 ), Ayodhya Uttar Pradesh 224001",
    locality: "Haiderganj",
    parentId: 403786,
    unserviceable: true,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    chain: [],
    feeDetails: {
      fees: [
        {
          name: "time",
          fee: 0,
          message: "",
        },
        {
          name: "distance",
          fee: 500,
          message: "",
        },
        {
          name: "special",
          fee: 0,
          message: "",
        },
      ],
      totalFees: 500,
      message: "",
      title: "Delivery Charge",
      amount: "500",
      icon: "",
    },
    availability: {
      opened: false,
      nextOpenMessage: "Opens next at 10 am, today",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "1.1 kms",
    hasSurge: false,
    sla: {
      restaurantId: "674767",
      deliveryTime: 20,
      minDeliveryTime: 20,
      maxDeliveryTime: 20,
      lastMileTravel: 1.100000023841858,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE_WITH_BANNER",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: false,
    avgRating: "--",
    totalRatings: 0,
    new: true,
  },
];
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://i.ibb.co/4VfV1tf/logo.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const ResCard = (props) => {
  console.log(props);

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={`https://res.cloudinary.com/swiggy/image/upload/${props.resObject.cloudinaryImageId}`}
      ></img>
      <h3>{props.resObject.name}</h3>
      <h4>{props.resObject.cuisines.join(",")}</h4>
      <h4>{props.resObject.totalRatings} Stars</h4>
      <h4>{props.resObject.sla.deliveryTime} mins</h4>
      <h4>{props.resObject.costForTwoString} mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* res-card */}

        <ResCard resObject={resObject[0]} />
        {/* <ResCard resName="Paddu food" cusisine="paddu, idly , south food" /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
