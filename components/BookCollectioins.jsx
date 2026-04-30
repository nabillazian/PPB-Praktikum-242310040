// 
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Chainsaw Man: Pochita",
    author: "Tatsuki Fujimoto",
    rating: 4.7,
    price: 3500,
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "UI/UX Design for Mobile",
    author: "Design Pro",
    rating: 4.4,
    price: 1100,
    image: "https://via.placeholder.com/150",
  },
];

export default function BookCollections() {
  return (
    <FlatList
      data={DATA}
      numColumns={2}
      keyExtractor={(item) => item.id}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />

          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>

          <Text style={styles.author}>{item.author}</Text>

          <View style={styles.row}>
            <Text>⭐ {item.rating}</Text>
            <Text>💰 {item.price}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 16,
    padding: 8,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    marginTop: 6,
  },
  author: {
    color: "gray",
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
});