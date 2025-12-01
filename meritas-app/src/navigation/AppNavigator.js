import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../theme';

// Main Screens
import { HomeScreen } from '../screens/HomeScreen';
import { BillingScreen } from '../screens/BillingScreen';
import { UsageScreen } from '../screens/UsageScreen';
import { DevicesScreen } from '../screens/DevicesScreen';
import { SupportScreen } from '../screens/SupportScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary[700],
        tabBarInactiveTintColor: theme.colors.gray[500],
        tabBarStyle: {
          paddingBottom: 20,
          paddingTop: 8,
          height: 72,
        },
        headerStyle: {
          backgroundColor: theme.colors.primary[700],
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontWeight: 600,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24 }}>🏠</Text>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Billing"
        component={BillingScreen}
        options={{
          tabBarLabel: 'Billing',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24 }}>💳</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Usage"
        component={UsageScreen}
        options={{
          tabBarLabel: 'Usage',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24 }}>📊</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Devices"
        component={DevicesScreen}
        options={{
          tabBarLabel: 'Devices',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24 }}>📱</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={SupportScreen}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24 }}>💬</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
};
