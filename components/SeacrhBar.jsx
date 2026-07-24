import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import BookCollections from "../components/BookCollectioins";

const ListBook = [
  {
    id: "1",
    title: "Timun Mas",
    author: "Media Selancar",
    rating: 4.2,
    views: 95,
    image: require("../assets/books/timun-mas.jpg"),
  },
  {
    id: "2",
    title: "Malin Kundang Anak Durhaka",
    author: "R. A. Pratama",
    rating: 4.5,
    views: 120,
    image: require("../assets/books/malin-kundang.jpg"),
  },
];

export default function SearchScreen() {
  const [search, setSearch] = useState("");

  const filteredBook = ListBook.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Books</Text>

      <TextInput
        placeholder="Search here..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <BookCollections books={filteredBook} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0e0909",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#ce1f1f",
    padding: 12,
    borderRadius: 25,
    marginBottom: 15,
  },
});

export default function SearchBar({value, setValue}) {
return (
    <View style={styles.h_container}>
      <View style={style_searchBar.search_container}>
        <Ionicons name="search-outline" size={16} color="gray" />
        <TextInput 
        autoFocus 
        placeholder="Search here"
        value={value} 
        onChangeText={(text)=>setValue(text)} />
      </View>
    </View>
);
}