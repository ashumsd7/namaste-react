import React from "react";

function Shimmer() {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e) => (
          <div key={e} className="shimmer-card"></div>
        ))}
    </div>
  );
}

export default Shimmer;
