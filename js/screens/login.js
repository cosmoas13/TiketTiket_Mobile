import React from "react";
import { Text, View, Image } from "react-native";
import { TextInput, Button, DefaultTheme } from "react-native-paper";
import AppBar from "../components/AppBar.Login";
import styles from "../../css/log";
export default class Login extends React.Component {
  state = {
    text: ""
  };

  render() {
    return (
      <>
        <AppBar navigation={this.props.navigation} />
        <View
          style={{
            flexDirection: "column",
            padding: 10,
            margin: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 2,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5
            }}
          >
            <TextInput
              style={{ width: "100%" }}
              label="Email"
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 2,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5
            }}
          >
            <TextInput
              style={{ width: "100%" }}
              label="Password"
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 2,
              borderRadius: 5
            }}
          >
            <Button
              theme={theme}
              style={{
                width: "100%",
                height: 50,
                alignItems: "center",
                justifyContent: "center"
              }}
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              <Text style={{ color: "#fff" }}>Login</Text>
            </Button>
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 10,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View style={{ paddingHorizontal: 18 }}>
              <Text style={{ color: "#ffA74d" }}>Lupa Password?</Text>
            </View>
            <View>
              <Text
                style={{
                  color: "silver"
                }}
              >
                |
              </Text>
            </View>
            <View style={{ paddingHorizontal: 16 }}>
              <Text style={{ color: "#ffA74d" }}>Belum memiliki akun?</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 10,
              borderRadius: 5
            }}
          >
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 2,
                width: "100%",
                borderStyle: "dotted",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontFamily: "Roboto-Reguler" }}>ATAU</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 2,
              borderRadius: 5
            }}
          >
            <Button
              icon="facebook"
              theme={theme}
              color="#536dfe"
              style={{
                width: "100%",
                height: 50,
                alignItems: "center",
                justifyContent: "center"
              }}
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              <Text style={{ color: "#fff" }}>Login dengan Facebook</Text>
            </Button>
          </View>
        </View>
      </>
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
