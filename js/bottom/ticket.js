import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "../../css/tick";
import AppBar from "../components/AppBar.Ticket";
import { Avatar } from "react-native-paper";
export default class MyComponent extends React.Component {
  state = {
    visible: true
  };

  render() {
    return (
      <>
        <AppBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "column",
              padding: 10,
              margin: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#ffA74d"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5
              }}
            >
              <View style={{ flex: 2 }}>
                <Text style={styles.text}>Kereta</Text>
                <Text style={styles.text4}>Minggu, 29-02-2020</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.text3}>Rp.400.000</Text>
                <Text style={{ fontFamily: "Roboto-Bold", color: "#00c853" }}>
                  Approved
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5
              }}
            >
              <View style={{ flex: 3 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../../assets/icons/traint.png")}
                />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={styles.textcity}>Jakarta</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Image
                  style={{ width: 13, height: 13 }}
                  source={require("../../assets/icons/arror.png")}
                />
              </View>
              <View style={{ flex: 5 }}>
                <Text style={styles.textcity}>DragonValley</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Avatar.Image
                  size={25}
                  source={require("../../assets/icons/arrow.png")}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              padding: 10,
              margin: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#ffA74d"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5
              }}
            >
              <View style={{ flex: 2 }}>
                <Text style={styles.text}>Pesawat</Text>
                <Text style={styles.text4}>Minggu, 29-02-2020</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.text3}>Rp.700.000</Text>
                <Text style={{ fontFamily: "Roboto-Bold", color: "#ffca28" }}>
                  Pending
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5
              }}
            >
              <View style={{ flex: 3 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../../assets/icons/airplant.png")}
                />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={styles.textcity}>Bandung</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Image
                  style={{ width: 13, height: 13 }}
                  source={require("../../assets/icons/arror.png")}
                />
              </View>
              <View style={{ flex: 5 }}>
                <Text style={styles.textcity}>Surabaya</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Avatar.Image
                  size={25}
                  source={require("../../assets/icons/arrow.png")}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              padding: 10,
              margin: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#ffA74d"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,

                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5
              }}
            >
              <View style={{ flex: 2 }}>
                <Text style={styles.text}>Bus</Text>
                <Text style={styles.text4}>Minggu, 29-02-2020</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.text3}>Rp.300.000</Text>
                <Text style={{ fontFamily: "Roboto-Bold", color: "#00c853" }}>
                  Approved
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5
              }}
            >
              <View style={{ flex: 3 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../../assets/icons/bust.png")}
                />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={styles.textcity}>Palembang</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Image
                  style={{ width: 13, height: 13 }}
                  source={require("../../assets/icons/arror.png")}
                />
              </View>
              <View style={{ flex: 5 }}>
                <Text style={styles.textcity}>Lampung</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Avatar.Image
                  size={25}
                  source={require("../../assets/icons/arrow.png")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
