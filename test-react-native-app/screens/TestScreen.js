import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { TestComponent } from './../components/AppComponents';
import * as firebase from 'firebase';
import MyIcon from './../components/MyIcon';
import { connect } from 'react-redux'
import { setFavoriteAnimal, setUserData } from './../redux/app-redux'

const mapStateToProps = (state) => {
  return {
    favoriteAnimal: state.favoriteAnimal,
    userData: state.userData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFavoriteAnimal: (text) => { dispatch(setFavoriteAnimal(text)); },
    setUserData: (text) => { dispatch(setUserData(text)); }
   };
}

class TestScreen extends React.Component {

  constructor(props){
    super(props);

    this.state = ({
      favoriteAnimal: this.props.favoriteAnimal,
    });

    
  }

  onSetFavoriteAnimalPress = () => {
    this.props.setFavoriteAnimal(this.state.favoriteAnimal);    
    console.log(this.props.userData);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <MonoText>TESTING Screen</MonoText>
        </View>
        <View style={styles.contentContainer}>
          <TestComponent favoriteAnimal={ this.props.favoriteAnimal } />
          <TextInput placeholder='enter animal name here' style={{ borderWidth: 1, height: 40, width: 200, padding: 10 }} value={ this.state.favoriteAnimal } onChangeText={ (e) => this.setState({ favoriteAnimal: e }) } />
          <Button title='Set Favorite Animal' onPress={ this.onSetFavoriteAnimalPress } />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen);
