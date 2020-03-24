import React from "react";
import BottomNav from "../components/BottomNavigation";

export default class MyComponent extends React.Component {
  render() {
    return <BottomNav navigation={this.props.navigation} />;
  }
}
