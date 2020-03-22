import React from "react";
import { Text, View } from "react-native";

export default class MyComponent extends React.Component {
  state = {
    visible: true
  };

  render() {
    return (
      <>
        <View>
          <Text>Profile</Text>
        </View>
      </>
    );
  }
}
