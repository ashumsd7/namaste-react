import React from "react";

class Profile extends React.Component {
  
  constructor(props) {
    console.log('CHild constructor');
    super(props);
    //create state

    this.state = {

      userInfo: {
        name: "DUMMY_NAME",
        location: "DUMMY_LOCATION",
      },
    };
  }

  async componentDidMount() {

  this.timer= setInterval(() => {
      console.log('NAMASTE')
    }, 2000);

    const data = await fetch("https://api.github.com/users/ashumsd7");
    const json = await data.json();
    this.setState({userInfo:json});

    console.log('Child didMount');
  }

  componentDidUpdate(prevProps,prevState){
    if(this.state.count!==prevState.count){  // its like your dependency array
      //do something after update
    }
    console.log('Child ComponentDidUpdate');
  }

  componentWillUnmount(){
    console.log('Child ComponentWillUnmount');
    clearInterval(this.timer)
  }

  render() {
    console.log("child in render :");
    return (
      <div>
        <img src={this.state.avatar_url}  width={200} height={200} />
        <h3>Class based Profile component</h3>
        <h4>Name : {this.state.userInfo.name}</h4>
        <h5>Count1: {this.state.userInfo.location}</h5>
        
        <button
          onClick={() => {
            this.setState({ count2: 666 });
          }}
        >
          Change Count
        </button>
      </div>
    );
  }
}

export default Profile;
