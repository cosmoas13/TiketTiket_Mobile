import React from "react";
import AppBar from "../components/AppBar.Header";
import BottomNav from "../components/BottomNavigation";

export default class MyComponent extends React.Component {
  state = {
    text: ""
  };

  render() {
    return (
      <>
        <AppBar />
        <BottomNav />
      </>
    );
  }
}
