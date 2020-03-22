import React from "react";

import { BottomNavigation, Text } from "react-native-paper";
import Home from "../bottom/home";
import Message from "../bottom/message";
import Profile from "../bottom/profile";

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "home", title: "Home", icon: "home" },
      { key: "message", title: "Inbox", icon: "message" },
      { key: "profile", title: "Profile", icon: "account" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    message: Message,
    profile: Profile
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
