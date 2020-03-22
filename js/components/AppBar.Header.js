import React from "react";
import { Appbar } from "react-native-paper";
// import Logo from "../../images/logo.png";
export default class MyComponent extends React.Component {
  _handleMore = () => console.log("Shown more");

  render() {
    return (
      <Appbar.Header>
        {/* <Appbar.Action icon={Logo} color="#fff" size={100} /> */}
        <Appbar.Content title="TiketTiket" color="#ffb74d" />
        <Appbar.Action
          icon="account"
          title="Hi Kevin"
          color="#ffb74d"
          onPress={this._handleMore}
        />
      </Appbar.Header>
    );
  }
}
