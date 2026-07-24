import { ScrollView, StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import CardList from "./components/cardlist";
import CardPorto from "./components/cardportopoliolist";

export default function Home() {
    const users = [
        {
            id: 1,
            name: "John Doe",
            title: "Software Engineer",
            department: "IT",
            email: "john.doe@example.com",
            img: require("./asset/book/foto.png"),
            portfolios: [
                { code: "P001", name: "Project A", image: require("./asset/book/foto.png") },
                { code: "P002", name: "Project B", image: require("./asset/book/foto.png") },
                { image: require("./asset/book/foto.png"), code: "P003", name: "Project C" },
            ]
        },
        {
            id: 2,
            name: "Jane Smith",
            title: "Product Manager",
            department: "Product",
            email: "jane.smith@example.com",
            img: require("./asset/book/foto.png"),
            portfolios: [
                { code: "P001", name: "Project A", image: require("./asset/book/foto.png") },
                { code: "P002", name: "Project B", image: require("./asset/book/foto.png") },
                { image: require("./asset/book/foto.png"), code: "P003", name: "Project C" },
            ]
        },
        {
            id: 3,
            name: "Alice Johnson",
            title: "UX Designer",
            department: "Design",
            email: "alice.johnson@example.com",
            img: require("./asset/book/foto.png"),
            portfolios: [
                { code: "P001", name: "Project A", image: require("./asset/book/foto.png") },
                { code: "P002", name: "Project B", image: require("./asset/book/foto.png") },
                { image: require("./asset/book/foto.png"), code: "P003", name: "Project C" },
            ]
        },
        {
            id: 4,
            name: "Bob Williams",
            title: "Data Analyst",
            department: "Data Science",
            email: "bob.williams@example.com",
            img: require("./asset/book/foto.png"),
            portfolios: [
                { code: "P001", name: "Project A", image: require("./asset/book/foto.png") },
                { code: "P002", name: "Project B", image: require("./asset/book/foto.png") },
                { image: require("./asset/book/foto.png"), code: "P003", name: "Project C" },
            ]
        },
        {
            id: 5,
            name: "Emily Davis",
            title: "Marketing Specialist",
            department: "Marketing",
            email: "emily.davis@example.com",
            img: require("./asset/book/foto.png"),
            portfolios: [
                { code: "P001", name: "Project A", image: require("./asset/book/foto.png") },
                { code: "P002", name: "Project B", image: require("./asset/book/foto.png") },
                { image: require("./asset/book/foto.png"), code: "P003", name: "Project C" },
            ]
        },
        {
            id: 6,
            name: "Michael Brown",
            title: "HR Manager",
            department: "Human Resources",
            email: "michael.brown@example.com",
            img: require("./asset/book/foto.png"),
            portfolios: [
                { code: "P001", name: "Project A", image: require("./asset/book/foto.png") },
                { code: "P002", name: "Project B", image: require("./asset/book/foto.png") },
                { image: require("./asset/book/foto.png"), code: "P003", name: "Project C" },
            ]
        }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>User Directory</Text>
                <Text style={styles.headerSubtitle}>Total: {users.length} Employees</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.sectionTitle}>Employee List</Text>
                {users.map((user) => (
                    <CardList key={user.id} user={user} />
                ))}

                <Text style={styles.sectionTitle}>Project Highlights</Text>
                {/* Mengambil semua portfolio dari semua user untuk ditampilkan */}
                {users.map((user) => 
                    user.portfolios.map((porto) => (
                        <CardPorto key={`${user.id}-${porto.code}`} item={porto} />
                    ))
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
    },
    header: {
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    headerSubtitle: {
        fontSize: 14,
        color: 'gray',
    },
    scrollContent: {
        padding: 15,
        paddingBottom: 40, // Ruang ekstra di bawah
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15,
        color: '#42799e',
    }
});