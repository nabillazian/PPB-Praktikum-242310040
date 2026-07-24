import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CardPorto from "./cardportopoliolist";

export default function Porto({ user, onBack }) {
  if (!user) return <Text>Loading...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Button title="BACK" onPress={onBack} color="#42799e" />

      <View style={styles.profileSection}>
        <Image source={user.img} style={styles.largeAvatar} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userTitle}>{user.title} - {user.department}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Portofolio List</Text>
      <View style={styles.listContainer}>
        {user.portfolios.map((portfolio) => (
          <CardPorto key={portfolio.code} item={portfolio} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  profileSection: { alignItems: 'center', marginVertical: 20 },
  largeAvatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  userName: { fontSize: 22, fontWeight: 'bold' },
  userTitle: { fontSize: 16, color: 'gray' },
  userEmail: { fontSize: 14, color: '#42799e', marginTop: 5 },
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  listContainer: { paddingBottom: 30 }
});