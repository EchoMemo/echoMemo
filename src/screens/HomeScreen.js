import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeComponent from './HomeComponent';
import VoiceComponent from './VoiceComponent';
import ProfileComponent from './ProfileComponent';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeComponent}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? '#6200ee' : 'gray'}
              size={28}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Voice"
        component={VoiceComponent}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.voiceIconWrapper}>
              <View
                style={[
                  styles.voiceIconContainer,
                  focused && styles.voiceIconFocused,
                ]}>
                <MaterialCommunityIcons name="microphone" size={28} color="#fff" />
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileComponent}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="account"
              color={focused ? '#6200ee' : 'gray'}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  voiceIconWrapper: {
    position: 'absolute',
    top: -30, // to float it
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
  },
  voiceIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#6200ee',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
  },
  voiceIconFocused: {
    backgroundColor: '#3700b3',
  },
});

export default HomeScreen;
