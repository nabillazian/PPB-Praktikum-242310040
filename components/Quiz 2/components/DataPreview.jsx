import { StyleSheet, Text, View } from "react-native";

const DataPreview = ({ nama, nip, jabatan, institusi }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hasil Input</Text>

      <Text style={styles.text}>Nama : {nama}</Text>
      <Text style={styles.text}>NIP : {nip}</Text>
      <Text style={styles.text}>Jabatan : {jabatan}</Text>
      <Text style={styles.text}>Institusi : {institusi}</Text>
    </View>
  );
};

export default DataPreview;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "85%",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});