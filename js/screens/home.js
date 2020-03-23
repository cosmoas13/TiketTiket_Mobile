import React from "react";
import BottomNav from "../components/BottomNavigation";
import AppBar from "../components/AppBar.Header";
import { Provider as PaperProvider } from "react-native-paper";

export default class MyComponent extends React.Component {
  render() {
    return (
      <PaperProvider>
        {/* <AppBar /> */}
        <BottomNav />
      </PaperProvider>
    );
  }
}
