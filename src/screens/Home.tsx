/**
 * Home Screen - Tela Principal do Paciente
 * Exibe informações do usuário e acesso rápido às funcionalidades
 */

import React from "react";
import styles from "../styles/home.styles";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../contexts/AuthContext";

export default function Home({ navigation }: any) {
  const { usuario, logout } = useAuth();

  async function handleLogout() {
    Alert.alert(
      "Sair",
      "Deseja realmente sair da sua conta?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sair",
          style: "destructive",
          onPress: async () => {
            await logout();
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.header}>
          <Text style={styles.icone}>👋</Text>
          <Text style={styles.titulo}>Olá, {usuario?.nome}!</Text>
          <Text style={styles.subtitulo}>O que deseja fazer hoje?</Text>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={[styles.menuItem, { backgroundColor: "#79059C" }]}
            onPress={() => navigation.navigate("MinhasConsultas")}
          >
            <Text style={styles.menuIcone}>📅</Text>
            <Text style={styles.menuTitulo}>Minhas Consultas</Text>
            <Text style={styles.menuDescricao}>Ver e gerenciar suas consultas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, { backgroundColor: "#4CAF50" }]}
            onPress={() => navigation.navigate("Agendamento")}
          >
            <Text style={styles.menuIcone}>➕</Text>
            <Text style={styles.menuTitulo}>Agendar Consulta</Text>
            <Text style={styles.menuDescricao}>Marcar nova consulta médica</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, { backgroundColor: "#FF9800" }]}
            onPress={() => navigation.navigate("ConsultasList")}
          >
            <Text style={styles.menuIcone}>📋</Text>
            <Text style={styles.menuTitulo}>Histórico</Text>
            <Text style={styles.menuDescricao}>Ver todas as suas consultas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, { backgroundColor: "#C62828" }]}
            onPress={() => navigation.navigate("PressaoArterial")}
          >
            <Text style={styles.menuIcone}>🩺</Text>
            <Text style={styles.menuTitulo}>Pressão Arterial</Text>
            <Text style={styles.menuDescricao}>
              Aferir PA e acionar emergência cardiológica se grave
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.logoutText}>🚪 Sair da Conta</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Sistema de Consultas Médicas</Text>
        </View>
      </ScrollView>
    </View>
  );
}

