import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileF from "./Profile";

function About() {
  return (
    <div>
      About
      <Profile name={'Deva'} />
      
      <ProfileF/>
    </div>
  );
}

export default About;
