import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


// export const unstable_settings = {
//   anchor: '(tabs)',
// };

export default function RootLayout() {

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      // <Stack>
      //   <Stack.Screen name="index" options={{ headerShown: false }} />
      // </Stack>
      // <StatusBar style="auto" />
    // </ThemeProvider>
    <>
      <StatusBar style="auto" hidden/>
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
