import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>3ESA</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6d0505c5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d4d4d4',
  },


});
