import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  const user = null; // заменить на реальную проверку авторизации

  return (
    <Stack>
      <StatusBar />

      {/* Экран для авторизованных */}
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>

      {/* Экран для неавторизованных */}
      <Stack.Protected guard={!user}>
        <Stack.Screen name="auth" options={{ title: "Authentication" }} />
      </Stack.Protected>
    </Stack>
  );
}
