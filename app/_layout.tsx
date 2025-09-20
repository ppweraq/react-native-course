import { AuthProvider, useAuth } from "@/lib/auth-context";
import { router, Stack, useSegments } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

function RootStack() {
  const { user, isLoadingUser } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === "auth";

    if (!user && !inAuthGroup && !isLoadingUser) {
      router.replace("/auth");
    } else if (user && inAuthGroup && !isLoadingUser) {
      router.replace("/");
    }
  }, [user, isLoadingUser, segments, router]);

  if (isLoadingUser) return <StatusBar />;
  // Можно показать спиннер или StatusBar, пока идёт проверка пользователя

  return (
    <Stack>
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={!user}>
        <Stack.Screen name="auth" options={{ title: "Authentication" }} />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar />

      <RootStack />
    </AuthProvider>
  );
}
