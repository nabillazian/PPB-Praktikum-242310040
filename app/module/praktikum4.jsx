import { Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from 'react-native-screens';
import BookCollections from "../../components/BookCollectioins";
import { styles } from '../../components/style/StyleApp';
import ListBook from "../../constants/listBooks/listBooks";




export function praktikum4() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> praktikum4 </Text>
      <SearchBar />
      <BookCollections books={ListBook} />
    </SafeAreaView>
  )
} 