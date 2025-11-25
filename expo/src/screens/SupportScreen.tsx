import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../theme';
import { Card } from '../components/Card';

export const SupportScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Support & Help</Text>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>How can we help?</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>💬 Chat with Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>📞 Call Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>📧 Email Support</Text>
          </TouchableOpacity>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>FAQ</Text>
          <Text style={styles.faq}>How do I change my plan?</Text>
          <Text style={styles.faq}>How do I add a line?</Text>
          <Text style={styles.faq}>How do I upgrade my device?</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.secondary,
  },
  content: {
    padding: theme.spacing[4],
  },
  title: {
    ...theme.typography.styles.h3,
    marginBottom: theme.spacing[4],
  },
  card: {
    marginBottom: theme.spacing[4],
  },
  cardTitle: {
    ...theme.typography.styles.h5,
    marginBottom: theme.spacing[4],
  },
  option: {
    paddingVertical: theme.spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.light,
  },
  optionText: {
    ...theme.typography.styles.body,
    fontSize: 18,
  },
  faq: {
    ...theme.typography.styles.body,
    paddingVertical: theme.spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.light,
  },
});
