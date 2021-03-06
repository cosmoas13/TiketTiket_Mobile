import React from "react";
import { Appbar, DefaultTheme } from "react-native-paper";
export default class MyComponent extends React.Component {
  _handleMore = () => console.log("Shown more");

  render() {
    return (
      <Appbar.Header theme={theme}>
        <Appbar.Content title="Profil" color="#fff" />
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
