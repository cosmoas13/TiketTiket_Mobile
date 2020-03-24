import React from "react";
import { Appbar, DefaultTheme } from "react-native-paper";
export default class MyComponent extends React.Component {
  render() {
    return (
      <Appbar.Header theme={theme}>
        {/* <Appbar.Action icon={Logo} color="#fff" size={100} /> */}
        <Appbar.Content title="TiketTiket" color="#ffb74d" />
        <Appbar.Action
          onPress={() => this.props.navigation.navigate("Login")}
          icon="account"
          title="Hi Kevin"
          color="#ffb74d"
        />
      </Appbar.Header>
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
