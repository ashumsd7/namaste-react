import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileF from "./Profile";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    console.log("parent constructor");
    super(props);
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }
  componentDidUpdate() {
    console.log("Parent ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent ComponentWillUnmount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        About class component
        <UserContext.Consumer>
          {(data) => {
            return (
              <h2 className="text-4xl text-green-500">
                Hey Best Website Award goes to{" "}
                <span className="font-extrabold text-red-600">{data.user.name}</span>
              </h2>
            );
          }}
        </UserContext.Consumer>
        {/* <ProfileF /> */}
      </div>
    );
  }
}

export default About;
