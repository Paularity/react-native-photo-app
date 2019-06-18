import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

import { TestComponent } from './../components/AppComponents'

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <MonoText>Home Screen</MonoText>
      </View>      
      <View style={styles.contentContainer}>
        <TestComponent />
      </View>      
    </View>
  );
}

TestScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainer: {
    padding: 30,
  },

});
