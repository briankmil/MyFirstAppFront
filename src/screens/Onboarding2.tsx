import React from "react";
import { Text, StyleSheet, SafeAreaView, View, Image } from "react-native";
import { ScreenIndicators } from "../components/ScreenIndicators";
import PrimaryButton from "../components/PrimaryButton";
import { RootStackScreenProps } from "../navigators/MainNavigator";
import { INTRO_SCREEN_02 } from "../utils/constants";
import { DrawerNavigator } from "../navigators/DrawerNavigator";
export const Onboarding2 = ({ navigation }: RootStackScreenProps<"Onboarding2">) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <View style={styles.shadow}>
          <Image style={[styles.image, ]} source={require("../assets/images/JPEG/maquina2.jpg")} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textSlide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  backButton: {
    flex: 1,
    marginRight: 5,
  },
  nextButton: {
    flex: 1,
    marginLeft: 5,
  },
  indicators: {
    marginBottom: 10,
  },
  shadow: {
    marginTop: 20,
    // alignItems: "center",
    // justifyContent: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: .55,
    // shadowRadius: 6.84,
    // elevation: 5,
  },
  image: {
    width: 370,
    height: 600,
    resizeMode: "cover",
    alignSelf: "center",
    borderRadius: 20,

  },
});
