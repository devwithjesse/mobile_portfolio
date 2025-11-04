// app/_layout.tsx
import React, { useState, useMemo } from "react";
import { Stack } from "expo-router";
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { useColorScheme } from "react-native";

export const ThemeContext = React.createContext({
  isDark: true,
  toggleTheme: () => {},
});

export default function RootLayout() {
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === "dark");
  const toggleTheme = () => setIsDark((p) => !p);

  const paperTheme = useMemo(() => (isDark ? MD3DarkTheme : MD3LightTheme), [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <PaperProvider theme={paperTheme}>
        <Stack screenOptions={{ headerShown: false }} />
      </PaperProvider>
    </ThemeContext.Provider>
  );
}
