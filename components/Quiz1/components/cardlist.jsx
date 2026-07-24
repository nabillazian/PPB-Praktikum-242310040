import { Image, StyleSheet, Text, View, } from "react-native";


export default function CardList({ user }) {

  return (
    <View style={styles.userCard}>
      <Image source={user.img} style={styles.userImage} />
      <Text style={{ fontWeight: 'bold' }}>{user.name}</Text>
      <Text>Title: {user.title}</Text>
      <Text>Department: {user.department}</Text>
      <Text>Email: {user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    userCard: {
        backgroundColor: '#b4dada',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#42799e',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },

})