import React from "react";
import "../styles/App.css";
import Main from "./main";
import Header from "./header";
// import Nav from "./nav";
import Navigator from "./Navigator";

class Landing extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  handleAuthStateChange(state) {
    if (state === "signedIn") {
      /* Do something when the user has signed-in */
    }
  }

  render() {
    if (this.props.authState === "signedIn") {
      return (
        <div>
          <Navigator />
          <Header />
          <Main />
        </div>
      );
    } else {
      return (
        <div>
          <Navigator />
          <Header />
        </div>
      );
    }
  }
}

export default Landing;
