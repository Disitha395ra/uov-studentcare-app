import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "./Profile";
import Course from "./Course";
import Subject from "./Subject";

const Tab = createBottomTabNavigator();

export default function Buttonpannel({ route }) {
  const { user } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = "account";
          } else if (route.name === "Course") {
            iconName = "cards-variant";
          } else if (route.name === "Subject") {
            iconName = "apps";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ user }}
        options={{ tabBarLabel: "Profile" }}
      />
      <Tab.Screen
        name="Course"
        component={Course}
        initialParams={{ user }}
        options={{ tabBarLabel: "Course" }}
      />
      <Tab.Screen
        name="Subject"
        component={Subject}
        initialParams={{ user }}
        options={{ tabBarLabel: "Subject" }}
      />
    </Tab.Navigator>
  );
}
