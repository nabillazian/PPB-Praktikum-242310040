import { Image, StyleSheet, Text, View } from "react-native";

export default function CardPorto({ item }) {
  return (
    <View style={styles.portoCard}>
      <Image source={item.image} style={styles.portoImage} />
      <View style={styles.portoInfo}>
        <Text style={styles.portoName}>{item.name}</Text>
        <Text style={styles.portoCode}>Code: {item.code}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  portoCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
  },
  portoImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  portoInfo: {
    marginLeft: 15,
  },
  portoName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  portoCode: {
    color: 'gray',
  },
});