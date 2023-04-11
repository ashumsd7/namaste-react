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
    console.log('parent constructor')
    super(props);

  }

  componentDidMount(){
    console.log('parent componentDidMount')
  }
  componentDidUpdate(){
    console.log('Parent ComponentDidUpdate');
  }

  componentWillUnmount(){
    console.log('Parent ComponentWillUnmount');
  }

  render() {
    console.log('parent render')
    return (
      <div>
        About class component
        <Profile name={"Deva"} />
      
      </div>
    );
  }
}

export default About;
