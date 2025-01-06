import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "./Profile"; // Replace with your Profile component
import Course from "./Course"; // Replace with your Course component
import Subject from "./Subject"; // Replace with your Subject component

const Tab = createBottomTabNavigator();

export default function ButtonNavigation({ route }) {
  const { user } = route.params;

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
