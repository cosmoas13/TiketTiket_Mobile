import React from "react";
import { Appbar, DefaultTheme } from "react-native-paper";
export default class MyComponent extends React.Component {
  _handleMore = () => console.log("Shown more");

  render() {
    return (
      <Appbar.Header theme={theme}>
        <Appbar.Action
          icon="close"
          color="#fff"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Appbar.Content title="Login" color="#fff" />
      </Appbar.Header>
    );
  }
}

const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: "#F97433"
  }
};
