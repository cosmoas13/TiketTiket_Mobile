import React from "react";

import { BottomNavigation, DefaultTheme } from "react-native-paper";
import Home from "../bottom/home";
import Message from "../bottom/ticket";
import Profile from "../bottom/profile";

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "home", title: "Home", icon: "home" },
      { key: "ticket", title: "My Ticket", icon: "ticket" },
      { key: "profile", title: "Profile", icon: "account" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    ticket: Message,
    profile: Profile
  });

  render() {
    return (
      <BottomNavigation
        theme={theme}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(246,247,251)"
  }
};
