import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    headerRight: {
        marginRight: 10,
    },
    userBadge: {
        flexDirection: "row",
        alignItems: "center",
    },
    userInfo: {
        alignItems: "flex-end",
    },
    userName: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
});
export default styles;