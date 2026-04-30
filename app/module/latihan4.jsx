import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookCollectioins from "../../components/BookCollectioins";
import Categoriesnav from "../../components/Categories";
import CTABook from "../../components/CTABook";
import Header from "../../components/header";
import { color_list, styles } from "../../components/style/StyleApp";
import ListBooks from "../../constants/listBooks/listBooks";

export default function HomeScreen() {
  const lastBook = ListBooks?.length
    ? ListBooks[ListBooks.length - 1]
    : null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      {/* HEADER */}
      <Header />
      {/* END HEADER */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* MAIN CONTENT */}
        <View style={{ flex: 1 }}>
          <CTABook book={lastBook} />
          <Categoriesnav />
          <BookCollectioins books={ListBooks} />
        </View>
        {/* MAIN CONTENT */}

        {/* FOOTER */}
        <View>
          <Text style={{ color: color_list.green }}>
            &copy; 2026 Nabilla Lintana Zian
          </Text>
        </View>
        {/* END FOOTER */}
      </ScrollView>
    </SafeAreaView>
  );
}