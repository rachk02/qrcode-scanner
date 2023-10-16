import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Camera from "../screens/camera";
import History from "../screens/history";

const Tab = createBottomTabNavigator();

export default function MyBottomTabs() {
  return (
    <Tab.Navigator initialRouteName="camera">
      <Tab.Screen
        name="camera"
        component={Camera}
        options={{
          title: "Caméra",
          tabBarIcon: ({ color, size }) => <Ionicons name="camera" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="history"
        component={History}
        options={{
          title: "Historique",
          tabBarIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
