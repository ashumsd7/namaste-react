import resObject from "../utils/mockData";
import ResCard from "./ResCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* res-card */}
        {resObject.map((res) => {
          return <ResCard key={res.id} resObject={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
