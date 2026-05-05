/**
 * Componente EmptyState
 * Exibido quando não há dados para mostrar
 */

import React from "react";
import styles from "../styles/emptyState.styles";
import { View, Text } from "react-native";

type EmptyStateProps = {
 mensagem?: string;
 icone?: string;
};

export default function EmptyState({
 mensagem = "Nenhum item encontrado",
 icone = "📋",
}: EmptyStateProps) {
 return (
 <View style={styles.container}>
 <Text style={styles.icone}>{icone}</Text>
 <Text style={styles.mensagem}>{mensagem}</Text>
 </View>
 );
}

