import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
// import User from "../assets/images/JPEG/user.jpg";
import Categories from "../screens/Categories";
import Contact from "../screens/Contact";
import Customize from "../screens/Customize";
import GetPremium from "../screens/GetPremium";
import Home from "../screens/Home2";
import RateApp from "../screens/RateApp";
import Settings from "../screens/Settings";
import Timer from "../screens/Timer";
import Backups from "../screens/Backups";

const Drawer = createDrawerNavigator();


export const DrawerNavigator = () => {
    return (
        <NavigationContainer>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1
                  }}
                >
                  <Image
                    // source={User}
                    source={require("../assets/images/JPEG/maquina.jpg")}
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius: 65
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#111"
                    }}
                  >Usuario Genérico</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#111"
                    }}
                  >Administrador Principal</Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "gray",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Inicio",
            title: "Inicio",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={Home}
        />
        <Drawer.Screen
          name="Timer"
          options={{
            drawerLabel: "Programador",
            title: "Programador",
            drawerIcon: () => (
              <MaterialIcons name="timer" size={20} color="#808080" />
            )
          }}
          component={Timer}
        />
        <Drawer.Screen
          name="Productos"
          options={{
            drawerLabel: "Productos",
            title: "Productos",
            drawerIcon: () => (
              <MaterialIcons name="category" size={20} color="#808080" />
            )
          }}
          component={Categories}
        />
        <Drawer.Screen
          name="Solicitudes"
          options={{
            drawerLabel: "Solicitudes",
            title: "Solicitudes",
            drawerIcon: () => (
              <MaterialIcons name="dashboard-customize" size={20} color="#808080" />
            )
          }}
          component={Customize}
        />
        <Drawer.Screen
          name="Configuración"
          options={{
            drawerLabel: "Configuración",
            title: "Configuración",
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={20} color="#808080" />
            )
          }}
          component={Settings}
        />

        <Drawer.Screen
          name="Inventario"
          options={{
            drawerLabel: "Inventario",
            title: "Inventario",
            drawerIcon: () => (
              <MaterialIcons name="backup" size={20} color="#808080" />
            )
          }}
          component={Backups}
        />

        <Drawer.Screen
          name="Contactos"
          options={{
            drawerLabel: "Contactos",
            title: "Contactos",
            drawerIcon: () => (
              <MaterialCommunityIcons name="certificate" size={20} color="#808080" />
            )
          }}
          component={GetPremium}
        />
        <Drawer.Screen
          name="Favoritos"
          options={{
            drawerLabel: "Favoritos",
            title: "Favoritos",
            drawerIcon: () => (
              <FontAwesome name="star" size={20} color="#808080" />
            )
          }}
          component={RateApp}
        />

        <Drawer.Screen
          name="Soporte"
          options={{
            drawerLabel: "Soporte",
            title: "Soporte",
            drawerIcon: () => (
              <MaterialCommunityIcons name="message-alert-outline" size={20} color="#808080" />
            )
          }}
          component={Contact}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    );
};