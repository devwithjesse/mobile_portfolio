// app/(tabs)/_layout.tsx
import React, { useContext } from "react";
import { Tabs } from "expo-router";
import { IconButton, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemeContext } from "../_layout"; // import global context

export default function TabsLayout() {
  const theme = useTheme();
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.elevation.level2 },
        headerTitleStyle: { color: theme.colors.onSurface },
        tabBarStyle: { backgroundColor: theme.colors.elevation.level2 },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
        headerRight: () => (
          <IconButton
            icon={isDark ? "weather-sunny" : "weather-night"}
            size={22}
            onPress={toggleTheme}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? "home" : "home-outline"} color={color} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="work"
        options={{
          title: "Work",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? "briefcase" : "briefcase-outline"} color={color} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? "folder-star" : "folder-star-outline"} color={color} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="faq"
        options={{
          title: "FAQ",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? "help-circle" : "help-circle-outline"} color={color} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? "phone" : "phone-outline"} color={color} size={22} />
          ),
        }}
      />
    </Tabs>
  );
}
