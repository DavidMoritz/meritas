import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { theme } from '../theme';
import { Card } from '../components/Card';

export const SupportScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header with Background Image - Fixed at top */}
      <ImageBackground
        source={require('../../assets/header-bg.png')}
        style={styles.header}
        resizeMode="cover"
      >
        <Text style={styles.headerTitle}>Support & Help</Text>
      </ImageBackground>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
        <Image source={require('../../assets/icon.png')} style={styles.logo} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.secondary,
  },
  header: {
    padding: theme.spacing[6],
    paddingTop: theme.spacing[16],
    paddingBottom: theme.spacing[4],
  },
  headerTitle: {
    ...theme.typography.styles.h2,
    color: theme.colors.white,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: theme.spacing[4],
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
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
