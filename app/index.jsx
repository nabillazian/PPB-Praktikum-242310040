import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
  <View> 
    <Text>Landing Page</Text>
    <Link href={"/main-apps"} push asChild>
      <Button title="Get Started" />
    </Link>
  </View>
  )
}