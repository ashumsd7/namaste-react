import React from "react";

function Shimmer() {
  return (
    <div className="restaurant-list" data-testid='shimmer-ui'>
      {Array(10)
        .fill("")
        .map((e, idx) => (
          <div key={idx} className="shimmer-card bg-gray-400"></div>
        ))}
    </div>
  );
}

export default Shimmer;
