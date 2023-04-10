import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      count: 12,
      count2: 23,
    };
    console.log('in constructor');
  }


  componentDidMount(){
    console.log('in componentDidMount');
  }

  render() {
    console.log("in render");
    return (
      <div>
        <h3>Class based Profile component</h3>
        <h4>Name : {this.props.name}</h4>
        <h5>Count1: {this.state.count}</h5>
        <h5>Count2: {this.state.count2}</h5>
        <button
          onClick={() => {
            this.setState({  count2: 666 });
          }}
        >
          Change Count
        </button>
      </div>
    );
  }
}

export default Profile;
