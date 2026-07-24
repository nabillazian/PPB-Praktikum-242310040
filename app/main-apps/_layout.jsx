
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "react-native";
import "react-native-reanimated";

export default function DrawerLayout() {
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { Tabs } from "expo-router";
import { StatusBar } from "react-native";
import "react-native-reanimated";

export default function TabLayout() {
  return (
    <>
      <StatusBar style="auto" barStyle={"dark-content"} hidden={false} />


      <Drawer
        screenOptions={{
          headerShown: true,

          drawerActiveTintColor: "#49745e",
          drawerInactiveTintColor: "gray",

          drawerStyle: {
            backgroundColor: "#f8f6f1",
            width: 260,
          },

          drawerLabelStyle: {
            fontSize: 15,
            fontWeight: "600",
          },

          headerStyle: {
            backgroundColor: "#49745e",
          },

          headerTintColor: "white",

          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            title: "E-Book Apps",
          }}
        />

        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About Apps",
            title: "About Apps",
          }}
        />

        <Drawer.Screen
          name="categories"
          options={{
            drawerLabel: "Book Categories",
            title: "Book Categories",
          }}
        />
      </Drawer>
    </>
  );
}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#49745e",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: "white",
            borderTopWidth: 2,
            borderTopColor: "#3a5d4a",
            height: 70,
            paddingBottom: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="direction" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
