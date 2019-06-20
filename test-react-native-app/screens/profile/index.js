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
import * as firebase from 'firebase';
import Colors from './../../constants/Colors';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>Profile</Text>
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
    borderColor: Colors.darkColor,
    borderWidth: 1,    
    padding: 10,
    marginTop: 5,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    width: 200,
    height: 40
  }

});
