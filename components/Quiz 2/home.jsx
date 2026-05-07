import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import DataPreview from "./components/DataPreview";

export default function Home() {

  const [nama, setNama] = useState("Nabilla Lintana Zian");
  const [nip, setNip] = useState("5555555");
  const [jabatan, setJabatan] = useState("Mahasiswi");
  const [institusi, setInstitusi] = useState("IBI Kesatuan");

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* FOTO */}
      <Image
        source={require("./asset/book/foto.jpg")}
        style={styles.image}
      />

      {/* NAMA */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama:</Text>

        <TextInput
          style={styles.input}
          value={nama}
          onChangeText={(text) => setNama(text)}
        />
      </View>

      {/* NIP */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>NIP:</Text>

        <TextInput
          style={styles.input}
          value={nip}
          keyboardType="numeric"
          onChangeText={(text) => setNip(text)}
        />
      </View>

      {/* JABATAN */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Jabatan:</Text>

        <TextInput
          style={styles.input}
          value={jabatan}
          onChangeText={(text) => setJabatan(text)}
        />
      </View>

      {/* INSTITUSI */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Institusi:</Text>

        <TextInput
          style={styles.input}
          value={institusi}
          onChangeText={(text) => setInstitusi(text)}
        />
      </View>

      {/* PROPS */}
      <DataPreview
        nama={nama}
        nip={nip}
        jabatan={jabatan}
        institusi={institusi}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#eaeaea",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "black",
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  label: {
    width: 90,
    fontSize: 18,
    color: "gray",
    fontWeight: "bold",
  },

  input: {
    width: 220,
    height: 45,
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: "#999",
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});