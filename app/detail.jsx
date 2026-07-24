import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListBook } from "../constants/listBooks/listBooks";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const book = ListBook.find((book) => book.id === id);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Text>ID: {id}</Text>
      <Text>Title: {book.title}</Text>
      <Text>Author: {book.author}</Text>
      <Text>Sinopsis: {book.sinopsis}</Text>
    </SafeAreaView>
  );
}