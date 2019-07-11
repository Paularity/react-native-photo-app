import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert
} from 'react-native';
import * as firebase from 'firebase';
import Colors from './../../constants/Colors';
import { connect } from 'react-redux';
import { watchUserData } from './../../redux/app-redux'

const mapStateToProps = (state) => {
  return {
    favoriteAnimal: state.favoriteAnimal,
    userData: state.userData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = ({
      name: this.props.userData.name ? this.props.userData.name : "No Display Name to show.",
      profilePic: this.props.userData.profilePic ? this.props.userData.profilePic : "No Image to show.",
      contactNo: this.props.userData.contactNo ? this.props.userData.contactNo : "No contact number to show.",
      email: this.props.userData.email ? this.props.userData.email : "No email address to show.",
      emailVerified: this.props.emailVerified
    });
  }

  onSignout = async () => {
    await firebase.auth().signOut();
  }

  onVerifyEmail = async () => {

    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: `https://test-project-d4b91.firebaseapp.com/__/auth/action?mode=%3Caction%3E&oobCode=%3Ccode%3E`,
      // This must be true.
      handleCodeInApp: true,
      // iOS: {
      //   bundleId: 'com.example.ios'
      // },
      // android: {
      //   packageName: 'com.example.android',
      //   installApp: true,
      //   minimumVersion: '12'
      // },
      // dynamicLinkDomain: 'example.page.link'
    };

    try{
      await firebase.auth().currentUser.sendEmailVerification();
      console.log(firebase.auth().currentUser);
      Alert.alert( 'Please check verification link that was sent to your email to fully verify your account.' );
    }
    catch(error)
    {
      Alert.alert( 'Verifying Email ERROR: ' + error );
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={{width: 200, height: 200, margin: 20,}}
            source={{uri: 'https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png'}}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text>Name: {this.state.name}</Text>
          <Text>Contact No: {this.state.contactNo}</Text>
          <Text>Email: {this.state.email}</Text>                
        </View>
        {
          (this.state.emailVerified) ?
            <View>
              <TouchableOpacity style={styles.btn} onPress={this.onVerifyEmail} >
                <Text style={{ color: '#fff', textTransform: 'uppercase' }}>Verify Email</Text>
              </TouchableOpacity>
            </View>
            :
            <View></View>
        }
        <TouchableOpacity style={styles.btn} onPress={this.onSignout} >
          <Text style={{ color: '#fff', textTransform: 'uppercase' }}>Signout</Text>
        </TouchableOpacity>
      </View>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
