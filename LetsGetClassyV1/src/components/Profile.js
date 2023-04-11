import { useEffect } from "react";

const Profile = () => {
  console.log("F: component start");

  useEffect(() => {
    console.log("F:In useEffect");
    const timer = setInterval(() => {
      console.log("TIMER in functional component");
    }, 1000);

    return () => {
      //clean up
      console.log("F: Return clean up");
      clearInterval(timer);
    };
  }, []);

  console.log("F: render");
  return <h1>I am Profile Page functional component.</h1>;
};

export default Profile;
