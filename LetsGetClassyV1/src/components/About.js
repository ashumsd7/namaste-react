import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileF from "./Profile";

// function About() {
//   return (
//     <div>
//       About
//       <Profile name={"Deva"} />
//       <ProfileF />
//     </div>
//   );
// }

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        About class component
        <Profile name={"Deva"} />
        <ProfileF />
      </div>
    );
  }
}

export default About;
