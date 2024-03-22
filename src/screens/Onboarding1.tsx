import React, { useRef, useState, useCallback } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ApplePay from '../components/ApplePay';
import { RootStackScreenProps } from "../navigators/MainNavigator";


export const Onboarding1 = ({ navigation }: RootStackScreenProps<"Onboarding2">) => {

  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["40%", "60%","80%"];

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>

        <View style={styles.shadow}>
          <Image style={[styles.image, { opacity: isOpen ? 0.2 : 1 }]} source={require("../assets/images/JPEG/modista.jpeg")} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSnapPress(0)}>
          <Text style={{ color: '#0080FB', fontSize: 16, fontWeight: '600' }}>Solicitar </Text>
        </TouchableOpacity>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
        >
          <BottomSheetView>
            <ApplePay />
            {/* <Text>App Store 🔥</Text> */}
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>

    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    textAlign: "left",
    margin: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 10,
    color: "#aaa",
    fontWeight: '500',

  },
  image: {
    width: 370,
    height: 600,
    resizeMode: "cover",
    alignSelf: "center",
    borderRadius: 20,

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
  button: {
    marginTop: 20,
    backgroundColor: '#f4f4f4',
    width: 80,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  }
});
