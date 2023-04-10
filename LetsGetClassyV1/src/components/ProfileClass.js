import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      count: 12,
      count2: 23,
    };
  }

  render() {
    console.log("THIS IS", this);
    return (
      <div>
        <h3>Class based Profile component</h3>
        <h4>Name : {this.props.name}</h4>
        <h5>Count1: {this.state.count}</h5>
        <h5>Count2: {this.state.count2}</h5>
        <button
          onClick={() => {
            this.setState({...this.state, count2:666});
          }}
        >
          Change Count
        </button>
      </div>
    );
  }
}

export default Profile;
