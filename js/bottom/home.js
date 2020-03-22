import React from "react";
import styles from "../../css/styles";
import {
  Image,
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  Button
} from "react-native";
import {
  Card,
  Title,
  Paragraph,
  IconButton,
  Avatar,
  Colors
} from "react-native-paper";
import Background from "../../images/back.jpg";
export default class MyComponent extends React.Component {
  state = {
    visible: true
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Background */}
        <View>
          <View
            style={{
              flexDirection: "column",
              height: 253
            }}
          >
            <View style={styles.flex1}>
              <ImageBackground
                source={Background}
                style={{ width: "100%", height: "100%", opacity: 0.6 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                marginLeft: 10
              }}
            >
              <View style={styles.flex3}>
                <IconButton
                  size={50}
                  icon={require("../../assets/icons/train.png")}
                  onPress={() => console.log("Pressed")}
                />
                <Text style={styles.txtRute1}>KERETA API</Text>
              </View>
              <View style={styles.flex3}>
                <IconButton
                  size={50}
                  icon={require("../../assets/icons/airplane.png")}
                  onPress={() => console.log("Pressed")}
                />
                <Text style={styles.txtRute2}>PESAWAT</Text>
              </View>
              <View style={styles.flex3}>
                <IconButton
                  size={50}
                  icon={require("../../assets/icons/hotel.png")}
                  onPress={() => console.log("Pressed")}
                />
                <Text style={styles.txtRute3}>HOTEL</Text>
              </View>
              <View style={styles.flex3}>
                <IconButton
                  size={50}
                  icon={require("../../assets/icons/bus.png")}
                  onPress={() => console.log("Pressed")}
                />
                <Text style={styles.txtRute4}>BUS</Text>
              </View>
            </View>
          </View>

          {/* Text Promo */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 16
            }}
          >
            <View>
              <Text
                style={{
                  paddingTop: 5,
                  fontFamily: "Roboto-Light",
                  fontWeight: "bold",
                  fontSize: 23
                }}
              >
                Promo
              </Text>
            </View>
            <View>
              <Text
                style={{
                  paddingTop: 10,
                  fontFamily: "Roboto-Light",
                  color: "orange",
                  fontSize: 15,
                  fontWeight: "bold"
                }}
              >
                Lihat Semua
              </Text>
            </View>
          </View>
          {/* Banner Promo */}
          <View
            style={{
              flexDirection: "row",
              height: 213
            }}
          >
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ padding: 10 }}>
                  <Image
                    source={{
                      uri:
                        "https://p4.wallpaperbetter.com/wallpaper/1008/204/834/original-characters-artwork-anime-train-station-wallpaper-preview.jpg",
                      width: 360,
                      height: "100%"
                    }}
                  />
                </View>
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://www.pegipegi.com/travel/wp-content/uploads/2019/04/pengumuman-pemenang-image-artikel.jpg",
                      width: 360,
                      height: "100%"
                    }}
                  />
                </View>
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://www.pegipegi.com/travel/wp-content/uploads/2019/04/810x456-9.jpg",
                      width: 360,
                      height: "100%"
                    }}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
          {/* Kota */}
          <View
            style={{
              flexDirection: "column"
            }}
          >
            <View>
              <Text
                style={{
                  paddingLeft: 20,
                  paddingTop: 5,
                  fontFamily: "Roboto-Light",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                Terbang Ke Luar Negeri
              </Text>
            </View>
            <View>
              <Text
                style={{
                  paddingLeft: 20,
                  fontFamily: "Roboto-Light",
                  fontSize: 14
                }}
              >
                Temukan inspirasi liburan mancanegara
              </Text>
            </View>
          </View>
          {/* Banner Kota */}
          <View
            style={{
              flexDirection: "row",
              height: 130
            }}
          >
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://lh4.googleusercontent.com/proxy/94Io5Rd_xFaH1j8vdVp6u1zqmcMVz5GlV9L006gkcRZXXfW85VLMOd52kEG1Gw_YbpA0WXK5ads7f4CYtZlRx2oqKHH8fLR4tJ1Y6bCkuq9eLaBLnnJ28Fx3RoxDSd7G4j2xh4uhFgxcTMrWEw7AqXTXUYOMhTFf73xpfrfUJ0RI=w357-h238-k-no",
                      width: 180,
                      height: "100%"
                    }}
                    style={styles.imgKota}
                  />
                  <Text style={styles.txtKota}>Malaysia</Text>
                </View>
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://lh5.googleusercontent.com/p/AF1QipMkxXznKO9up9SrmaEbP_JcqWYUA_qVSXjG7DI=w423-h238-k-no",
                      width: 180,
                      height: "100%"
                    }}
                    style={styles.imgKota}
                  />
                  <Text style={styles.txtKota1}>Jepang</Text>
                </View>
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://lh5.googleusercontent.com/p/AF1QipMfSICw-uX8A5ZZE_XJ9QkEzwpXzaDJIABBrW81=w476-h238-k-no",
                      width: 180,
                      height: "100%"
                    }}
                    style={styles.imgKota}
                  />
                  <Text style={styles.txtKota2}>Singapura</Text>
                </View>
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://lh5.googleusercontent.com/p/AF1QipNV7_r17EmBdhUauNVjdjaBJMl7al50ubnbr5l8=w357-h238-k-no",
                      width: 180,
                      height: "100%"
                    }}
                    style={styles.imgKota}
                  />
                  <Text style={styles.txtKota2}>Indonesia</Text>
                </View>
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://lh5.googleusercontent.com/p/AF1QipNmDTRHa2LHPlJX6t_8rWsz6y-gZU74ais3ryvK=w361-h238-k-no",
                      width: 180,
                      height: "100%"
                    }}
                    style={styles.imgKota}
                  />
                  <Text style={styles.txtKota3}>Arab</Text>
                </View>
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://lh5.googleusercontent.com/p/AF1QipPtOMCh9Xhh4G-Jjbfgg0iBrBk4jXSekaM_Y658=w423-h238-k-no",
                      width: 180,
                      height: "100%"
                    }}
                    style={styles.imgKota}
                  />
                  <Text style={styles.txtKota4}>Wuhan</Text>
                </View>
              </ScrollView>
            </View>
          </View>
          {/* Nusantara */}
          <View
            style={{
              flexDirection: "column"
            }}
          >
            <View>
              <Text
                style={{
                  paddingLeft: 20,
                  paddingTop: 5,
                  fontFamily: "Roboto-Light",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                Jelajahi Nusantara
              </Text>
            </View>
            <View>
              <Text
                style={{
                  paddingLeft: 20,
                  fontFamily: "Roboto-Light",
                  fontSize: 14
                }}
              >
                Temukan keragaman & keindahan Indonesia
              </Text>
            </View>
          </View>
          {/* Banner Nusantara */}
          <View
            style={{
              flexDirection: "row",
              height: 230
            }}
          >
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://lh5.googleusercontent.com/proxy/sILpwLt_yqJlXz7F6SYyu6oTAfB45k6XCAtr6_UkluuVvLAIMvaDjYdGZv9onrfkOSoPnGvEOf7B9JIZ6NGFWioOPxrstQ17aIMtzHaQnqUgD3MFXmUmnf9ODuYX1rRai9QFjSSkuFF85Ln-RVMKb8GxjAAHoDi77wiry_9dcEfw=w357-h238-k-no",
                      width: 250,
                      height: "100%"
                    }}
                    style={styles.imgKota}
                  />
                  <Text style={styles.txtNusa}>Raja Ampat</Text>
                </View>
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://lh5.googleusercontent.com/p/AF1QipOiLThBLALIuQjYOHT1TjpOVFSy3lXNGpB6aN33=w317-h238-k-no",
                      width: 250,
                      height: "100%"
                    }}
                    style={styles.imgKota}
                  />
                  <Text style={styles.txtNusa1}>Labuhan Bajo</Text>
                </View>
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://lh5.googleusercontent.com/p/AF1QipOo6tPYazdPir0YAg5aiKn_sg1EUttuArielPL2=w423-h238-k-no",
                      width: 250,
                      height: "100%"
                    }}
                    style={styles.imgKota}
                  />
                  <Text style={styles.txtNusa2}>Pattaya</Text>
                </View>
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://lh5.googleusercontent.com/p/AF1QipPmaQ6UHyjBoJE_81XnXO6n2OBYCy981qCRnYwq=w357-h238-k-no",
                      width: 250,
                      height: "100%"
                    }}
                    style={styles.imgKota}
                  />
                  <Text style={styles.txtNusa3}>Senggigi</Text>
                </View>
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://images.unsplash.com/photo-1573623473350-372f8fb84838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
                      width: 250,
                      height: "100%"
                    }}
                    style={styles.imgKota}
                  />
                  <Text style={styles.txtNusa4}>Karnak</Text>
                </View>
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri:
                        "https://images.yuktravel.com/images/upload/webpage/img-wat-pho-bangkok-thailand-yuktravel.jpg",
                      width: 250,
                      height: "100%"
                    }}
                    style={styles.imgKota}
                  />
                  <Text style={styles.txtNusa5}>Wat Pho</Text>
                </View>
              </ScrollView>
            </View>
          </View>
          {/* News */}
          <View
            style={{
              flexDirection: "column"
            }}
          >
            <View>
              <Text
                style={{
                  paddingLeft: 20,
                  paddingTop: 5,
                  fontFamily: "Roboto-Light",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                What's New
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row"
            }}
          >
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ backgroundColor: "#fff" }}
              >
                <View style={{ padding: 5 }}>
                  <Card
                    style={{
                      width: 350,
                      borderRadius: 10,
                      borderColor: "#fff"
                    }}
                  >
                    <Card.Content>
                      <Card.Cover
                        source={{
                          uri:
                            "https://www.pegipegi.com/travel/wp-content/uploads/2020/03/Travel-Blog-Ngobrol-Pegipegi-Corona-450x270.jpg"
                        }}
                        style={{
                          width: "100%",
                          height: 140
                        }}
                      />
                      <Title>Corona dan Dampaknya</Title>
                      <Paragraph>Dampak Terhadap Industri Travel</Paragraph>
                    </Card.Content>
                  </Card>
                </View>
                <View style={{ padding: 5 }}>
                  <Card style={{ width: 350, borderRadius: 10 }}>
                    <Card.Content>
                      <Card.Cover
                        source={{
                          uri:
                            "https://img.okeinfo.net/content/2019/03/25/406/2034784/promo-best-travel-week-pegipegi-hadirkan-diskon-terbang-setengah-harga-nginap-gratis-OFZKLtT084.jpg"
                        }}
                        style={{
                          width: "100%",
                          height: 140
                        }}
                      />
                      <Title>Best Travel Week</Title>
                      <Paragraph>Terbang 1/2 Harga & Nginap Gratis</Paragraph>
                    </Card.Content>
                  </Card>
                </View>
                <View style={{ padding: 5 }}>
                  <Card style={{ width: 350, borderRadius: 10 }}>
                    <Card.Content>
                      <Card.Cover
                        source={{
                          uri:
                            "https://img.okeinfo.net/content/2019/03/25/406/2034784/promo-best-travel-week-pegipegi-hadirkan-diskon-terbang-setengah-harga-nginap-gratis-OFZKLtT084.jpg"
                        }}
                        style={{
                          width: "100%",
                          height: 140
                        }}
                      />
                      <Title>Darurat COVID-19</Title>
                      <Paragraph>
                        Informasi Pengajuan Refund & Reschedule
                      </Paragraph>
                    </Card.Content>
                  </Card>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
