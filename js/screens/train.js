import React from "react";
import { Text, View, Image } from "react-native";
import AppBar from "../components/AppBar.Train";
import styles from "../../css/log";
import { TextInput, Button, Avatar } from "react-native-paper";
export default class MyComponent extends React.Component {
  render() {
    return (
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "#FEA500" }}
      >
        <AppBar navigation={this.props.navigation} />
        <View
          style={{
            flexDirection: "column",
            padding: 10,
            margin: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            backgroundColor: "white"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 20,
              borderRadius: 5
            }}
          >
            <View
              style={{
                width: "100%",
                borderStyle: "dotted"
              }}
            >
              <Text style={{ fontFamily: "Roboto-Bold", fontSize: 18 }}>
                Pulang Pergi?
              </Text>
            </View>
            <View>
              <Image
                style={{ width: 13, height: 13 }}
                source={require("../../assets/icons/arror.png")}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              borderRadius: 5,
              padding: 10
            }}
          >
            <View
              style={{
                borderBottomColor: "black",
                borderTopWidth: 1,
                width: "100%",
                borderStyle: "dotted"
              }}
            ></View>
          </View>

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
                padding: 10,
                borderRadius: 5
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={styles.text}>Asal</Text>
                <Text style={{ fontFamily: "Roboto-Bold" }}>GMR</Text>
                <Text style={styles.text4}>Gambir</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require("../../assets/icons/rep.png")}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={styles.text}>Tujuan</Text>
                <Text style={{ fontFamily: "Roboto-Bold" }}>BD</Text>
                <Text style={styles.text4}>Bandung</Text>
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
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={styles.text}>Berangkat</Text>
                <Text style={{ fontFamily: "Roboto-Bold" }}>
                  Rab, 25 Mar 2020
                </Text>
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
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={styles.text}>Penumpang</Text>
                <Text style={{ fontFamily: "Roboto-Bold" }}>
                  1 Dewasa, 0 Bayi
                </Text>
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
                style={{
                  width: "100%",
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                color="#F97433"
                mode="contained"
                onPress={() => console.log("Pressed")}
              >
                <Text style={{ color: "#fff" }}>Cari Tiket</Text>
              </Button>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "35%"
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              width: 350
            }}
            source={require("../../assets/icons/kereta.jpg")}
          />
        </View>
      </View>
    );
  }
}
