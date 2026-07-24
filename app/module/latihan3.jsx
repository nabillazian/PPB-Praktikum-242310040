import { StatusBar } from "expo-status-bar";
import { Button, Image, ScrollView, StyleSheet, Text } from "react-native";
import Filler from "../../components/filler";

const latihan3_1 = () => {
  return (
    <ScrollView style={StyleSheet.container}>
        <Text style={StyleSheet.title}>latihan 3</Text>
        <Image/>
        source={require("../../assets/images/icon.png")}
        style={StyleSheet.image}
        /
        <Filler />
        <Button
            title="Go to Latihan 2"
            onPress={() => console.log("Go to Latihan 2")}
            />
            <StatusBar style="auto" />
    </ScrollView>    
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
        // justifyContent: "center",
        // alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontHeight: "Bold",
        marginBottom: 20,
    },
    image: {
        widht: 100,
        height: 100,
        marginBottom: 20,
    },

});

export default latihan3_1