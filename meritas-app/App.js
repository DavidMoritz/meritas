import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { colors } from './src/theme';
import { Button, Card, Input } from './src/components';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Meritas Mobile</Text>
        <Text style={styles.subtitle}>Component Library Test</Text>

        {/* Card Component Test */}
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Welcome!</Text>
          <Text style={styles.cardText}>
            This is a test of the Card component with elevated styling.
          </Text>
        </Card>

        {/* Input Component Test */}
        <Input
          label="Email Address"
          placeholder="Enter your email"
          helperText="We'll never share your email"
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />

        {/* Button Component Tests */}
        <Button
          title="Primary Button"
          onPress={() => Alert.alert('Primary button pressed!')}
          fullWidth
        />

        <Button
          title="Secondary Button"
          variant="secondary"
          onPress={() => Alert.alert('Secondary button pressed!')}
          fullWidth
          style={styles.buttonSpacing}
        />

        <Button
          title="Outline Button"
          variant="outline"
          onPress={() => Alert.alert('Outline button pressed!')}
          fullWidth
          style={styles.buttonSpacing}
        />

        <Button
          title="Small Button"
          size="sm"
          onPress={() => Alert.alert('Small button pressed!')}
          style={styles.buttonSpacing}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    color: colors.primary[700],
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 400,
    color: colors.text.secondary,
    marginBottom: 24,
  },
  card: {
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 600,
    color: colors.text.primary,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 400,
    color: colors.text.secondary,
  },
  buttonSpacing: {
    marginTop: 12,
  },
});
