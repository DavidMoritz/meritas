import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { theme } from '../theme';
import { Card } from '../components/Card';

export const DevicesScreen = () => {
  const devices = [
    { name: 'iPhone 15 Pro', price: '$999', image: '📱' },
    { name: 'Samsung Galaxy S24', price: '$899', image: '📱' },
    { name: 'Google Pixel 8', price: '$699', image: '📱' },
  ];

  return (
    <View style={styles.container}>
      {/* Header with Background Image - Fixed at top */}
      <ImageBackground
        source={require('../../assets/header-bg.png')}
        style={styles.header}
        resizeMode="cover"
      >
        <Text style={styles.headerTitle}>Shop Devices</Text>
      </ImageBackground>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>

        {devices.map((device, index) => (
          <TouchableOpacity key={index}>
            <Card style={styles.deviceCard}>
              <Text style={styles.deviceEmoji}>{device.image}</Text>
              <View style={styles.deviceInfo}>
                <Text style={styles.deviceName}>{device.name}</Text>
                <Text style={styles.devicePrice}>{device.price}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
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
  deviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing[3],
  },
  deviceEmoji: {
    fontSize: 48,
    marginRight: theme.spacing[4],
  },
  deviceInfo: {
    flex: 1,
  },
  deviceName: {
    ...theme.typography.styles.h5,
    marginBottom: theme.spacing[1],
  },
  devicePrice: {
    ...theme.typography.styles.body,
    color: theme.colors.primary[700],
    fontWeight: 600,
  },
});
