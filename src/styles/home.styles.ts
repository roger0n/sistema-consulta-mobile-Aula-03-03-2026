import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    scrollContent: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: "#79059C",
        padding: 32,
        paddingTop: 48,
        alignItems: "center",
    },
    icone: {
        fontSize: 60,
        marginBottom: 16,
    },
    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 16,
        color: "#fff",
        opacity: 0.9,
    },
    menuContainer: {
        padding: 20,
        gap: 16,
    },
    menuItem: {
        padding: 24,
        borderRadius: 16,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        elevation: 3,
    },
    menuIcone: {
        fontSize: 40,
        marginBottom: 12,
    },
    menuTitulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
    },
    menuDescricao: {
        fontSize: 14,
        color: "#fff",
        opacity: 0.9,
    },
    logoutButton: {
        margin: 20,
        marginTop: 32,
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#f44336",
        alignItems: "center",
    },
    logoutText: {
        color: "#f44336",
        fontWeight: "bold",
        fontSize: 16,
    },
    footer: {
        padding: 20,
        alignItems: "center",
    },
    footerText: {
        fontSize: 12,
        color: "#666",
    },
    footerSubtext: {
        fontSize: 10,
        color: "#999",
    },
});
export default styles;