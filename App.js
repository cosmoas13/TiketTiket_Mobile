import React, { Component } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Router from "./js/router";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    // ...DefaultTheme.colors,
    primary: "#fff",
    accent: "#ffb74d"
  }
};

class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <Router />
      </PaperProvider>
    );
  }
}

export default App;
