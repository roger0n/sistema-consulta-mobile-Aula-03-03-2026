/**
 * Componente Loading
 * Indicador de carregamento centralizado
 */

import React from "react";
import styles from "../styles/loading.styles";
import { View, ActivityIndicator, Text, } from "react-native";

type LoadingProps = {
 mensagem?: string;
};

export default function Loading({ mensagem = "Carregando..." }: LoadingProps) {
 return (
 <View style={styles.container}>
 <ActivityIndicator size="large" color="#79059C" />
 <Text style={styles.texto}>{mensagem}</Text>
 </View>
 );
}


