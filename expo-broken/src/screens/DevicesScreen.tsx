import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../theme';
import { Card } from '../components/Card';

export const DevicesScreen = () => {
  const devices = [
    { name: 'iPhone 15 Pro', price: '$999', image: '📱' },
    { name: 'Samsung Galaxy S24', price: '$899', image: '📱' },
    { name: 'Google Pixel 8', price: '$699', image: '📱' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Shop Devices</Text>

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
