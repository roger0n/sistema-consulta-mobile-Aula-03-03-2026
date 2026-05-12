import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: "#79059C",
 },
 scrollContent: {
 flexGrow: 1,
 },
 content: {
 flex: 1,
 padding: 24,
 paddingTop: 60,
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
 marginBottom: 32,
 },
 formContainer: {
 gap: 20,
 },
 label: {
 fontSize: 14,
 fontWeight: "600",
 color: "#fff",
 marginBottom: 8,
 },
 input: {
 backgroundColor: "#fff",
 paddingVertical: 16,
 paddingHorizontal: 20,
 borderRadius: 12,
 fontSize: 16,
 color: "#333",
 },
 textArea: {
 height: 100,
 paddingTop: 16,
 },
 selector: {
 backgroundColor: "#fff",
 padding: 16,
 borderRadius: 12,
 },
 selectorLabel: {
 fontSize: 12,
 color: "#666",
 marginBottom: 4,
 },
 selectorValue: {
 fontSize: 16,
 color: "#333",
 fontWeight: "500",
 },
 selectorDisabled: {
 color: "#999",
 },
 botao: {
 paddingVertical: 16,
 paddingHorizontal: 32,
 borderRadius: 12,
 alignItems: "center",
 marginTop: 8,
 },
 botaoPrimario: {
 backgroundColor: "#fff",
 },
 botaoSecundario: {
 backgroundColor: "transparent",
 borderWidth: 2,
 borderColor: "#fff",
 },
 botaoTexto: {
 color: "#79059C",
 fontWeight: "bold",
 fontSize: 16,
 },
 botaoTextoSecundario: {
 color: "#fff",
 fontWeight: "bold",
 fontSize: 16,
 },
 modalOverlay: {
 flex: 1,
 backgroundColor: "rgba(0, 0, 0, 0.5)",
 justifyContent: "flex-end",
 },
 modalContent: {
 backgroundColor: "#fff",
 borderTopLeftRadius: 20,
 borderTopRightRadius: 20,
 padding: 24,
 maxHeight: "80%",
 },
 modalTitulo: {
 fontSize: 20,
 fontWeight: "bold",
 color: "#333",
 marginBottom: 20,
 textAlign: "center",
 },
 modalItem: {
 paddingVertical: 16,
 borderBottomWidth: 1,
 borderBottomColor: "#eee",
 },
 modalItemTexto: {
 fontSize: 16,
 color: "#333",
 fontWeight: "500",
 },
 modalItemSubtexto: {
 fontSize: 14,
 color: "#666",
 marginTop: 4,
 },
 modalBotaoFechar: {
 marginTop: 20,
 paddingVertical: 14,
 backgroundColor: "#f0f0f0",
 borderRadius: 12,
 alignItems: "center",
 },
 modalBotaoTexto: {
 fontSize: 16,
 color: "#666",
 fontWeight: "600",
 },
 horarioGrid: {
 justifyContent: "space-between",
 marginBottom: 12,
 },
 horarioItem: {
 backgroundColor: "#79059C",
 paddingVertical: 12,
 paddingHorizontal: 20,
 borderRadius: 8,
 flex: 0.3,
 alignItems: "center",
 },
 horarioTexto: {
 color: "#fff",
 fontSize: 16,
 fontWeight: "600",
 },
});
export default styles;
