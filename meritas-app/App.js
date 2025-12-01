import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meritas Mobile</Text>
      <Text style={styles.subtitle}>Powered by American Values</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary[700],  // Patriot blue background
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    color: colors.white,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 400,
    color: colors.accent[700],  // Patriot red text
  },
});
