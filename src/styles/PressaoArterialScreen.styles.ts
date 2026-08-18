import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
    },
    icone: {
        fontSize: 56,
        marginBottom: 8,
    },
    titulo: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#79059C",
    },
    subtitulo: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        marginTop: 6,
    },
    cardInfo: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: "#79059C",
    },
    cardInfoTitulo: {
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    cardInfoTexto: {
        color: "#555",
        fontSize: 13,
        marginBottom: 2,
    },
    destaque: {
        color: "#B71C1C",
        fontWeight: "700",
        marginTop: 4,
    },
    form: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
        marginTop: 8,
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 16,
        fontSize: 18,
        color: "#333",
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },
    botao: {
        marginTop: 12,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
    },
    botaoPrimario: {
        backgroundColor: "#79059C",
    },
    botaoSecundario: {
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#79059C",
    },
    botaoTexto: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    botaoTextoSecundario: {
        color: "#79059C",
        fontWeight: "bold",
        fontSize: 16,
    },
    resultado: {
        marginTop: 24,
        padding: 16,
        borderRadius: 12,
        borderWidth: 2,
    },
    resultadoTitulo: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    resultadoValor: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    resultadoDescricao: {
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
    },
    resultadoEmergencia: {
        marginTop: 12,
        fontSize: 14,
        fontWeight: "700",
        color: "#B71C1C",
    },
    aviso: {
        marginTop: 24,
        fontSize: 12,
        color: "#888",
        textAlign: "center",
        lineHeight: 18,
    },
});
export default styles;