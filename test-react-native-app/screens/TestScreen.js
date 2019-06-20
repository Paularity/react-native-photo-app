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
  ActivityIndicator
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { TestComponent } from './../components/AppComponents';
import * as firebase from 'firebase';
import MyIcon from './../components/MyIcon';

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <MonoText>Home Screen</MonoText>
      </View>
      <View style={styles.contentContainer}>
        <TestComponent />
      </View>
      <TouchableOpacity style={styles.btn} onPress={ onSignout } >
        <Text style={{ color: '#fff', textTransform: 'uppercase' }}>Signout</Text>
      </TouchableOpacity>      
    </View>
  );
}

onSignout = async() =>
{  
  firebase.auth().signOut();
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  contentContainer: {

  },

  btn: {
    borderRadius: 50,
    borderColor: '#800',
    borderWidth: 1,    
    padding: 10,
    marginTop: 5,
    backgroundColor: '#FE434C',
    alignItems: 'center',
    width: 200,
    height: 40
  }

});
