import { useParams } from "react-router-dom";

const ResMenu = () => {
  const params = useParams();

  console.log(params)
  return (
    <div>
      <h1> Res ID : {params.id}</h1>
      <h2>My Res</h2>
    </div>
  );
};

export default ResMenu;
