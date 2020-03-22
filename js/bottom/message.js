import React from "react";
import { Text, View } from "react-native";

export default class MyComponent extends React.Component {
  state = {
    visible: true
  };

  render() {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            height: 100
          }}
        >
          <View style={{ backgroundColor: "blue", flex: 1 }} />
          <View style={{ backgroundColor: "red", flex: 2 }} />
          <View style={{ backgroundColor: "yellow", flex: 4 }} />
          <View style={{ backgroundColor: "green", flex: 2 }} />
        </View>

        <View
          style={{
            flexDirection: "row",
            height: 100
          }}
        >
          <View style={{ backgroundColor: "red", flex: 1 }} />
          <View style={{ backgroundColor: "yellow", flex: 2 }} />
          <View style={{ backgroundColor: "orange", flex: 4 }} />
          <View style={{ backgroundColor: "purple", flex: 2 }} />
        </View>
      </>
    );
  }
}
