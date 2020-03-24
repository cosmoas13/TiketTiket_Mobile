import React from "react";
import styles from "../../css/prof";
import { View, Text, Image } from "react-native";
import AppBar from "../components/AppBar.Profile";
import { Avatar } from "react-native-paper";

export default class MyComponent extends React.Component {
  render() {
    return (
      <>
        <AppBar />
        <View
          style={{
            flexDirection: "column",
            padding: 10,
            margin: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#ffb74d"
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
            <View style={styles.flex1}>
              <Avatar.Image
                size={55}
                source={require("../../images/miya.jpg")}
              />
            </View>
            <View style={styles.flex2}>
              <Text style={styles.text}>Miya</Text>
              <Text style={styles.text1}>miya69@mail.com</Text>
            </View>
            <View style={styles.flex3}>
              <Text onPress={() => console.log("Pressed")} style={styles.text2}>
                UBAH
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#ffA74d"
            }}
          >
            <View style={styles.flex1}>
              <Image
                style={{ width: 23, height: 23 }}
                source={require("../../assets/icons/start.png")}
              />
            </View>
            <View style={{ flex: 6 }}>
              <Text style={styles.text}>0 Poin</Text>
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
            borderColor: "#ffb74d"
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
            <View style={{ flex: 1 }}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/icons/group.png")}
              />
            </View>
            <View style={{ flex: 6 }}>
              <Text style={styles.text3}>Daftar Tamu dan Penumpang</Text>
              <Text style={styles.text4}>Isi data teman perjalanan Anda</Text>
            </View>
            <View style={styles.flex3}>
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
            borderColor: "#ffb74d"
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
            <View style={{ flex: 1 }}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/icons/headset.png")}
              />
            </View>
            <View style={{ flex: 6 }}>
              <Text style={styles.text3}>Pusat Bantuan</Text>
              <Text style={styles.text4}>Kami siap membantu Anda</Text>
            </View>
            <View style={styles.flex3}>
              <Avatar.Image
                size={25}
                source={require("../../assets/icons/arrow.png")}
              />
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
            <View style={{ flex: 1 }}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/icons/mail.png")}
              />
            </View>
            <View style={{ flex: 6 }}>
              <Text style={styles.text3}>Newsletter</Text>
              <Text style={styles.text4}>Berlangganan newsletter</Text>
            </View>
            <View style={styles.flex3}>
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
            borderColor: "#ffb74d"
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
            <View style={{ flex: 1 }}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/icons/exit.png")}
              />
            </View>
            <View style={{ flex: 6 }}>
              <Text style={styles.text3}>Keluar</Text>
            </View>
            <View style={styles.flex3}>
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
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5
            }}
          >
            <Text style={styles.text3}>Version 3.1.1</Text>
          </View>
        </View>
      </>
    );
  }
}
