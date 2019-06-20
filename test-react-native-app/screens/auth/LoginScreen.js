import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false
        };
    }

    onLoginPress = async () => {
        try {
            await Promise.all(
                [
                    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password),
                    this.setState({ isLoading: true })
                ]
            );
            this.setState({ isLoading: false });
            this.props.navigation.navigate('Main')
        }
        catch (error) {
            Alert.alert(error.message);
            this.setState({ isLoading: false });
        }
    }

    onCreateAccountPress = () => {
        var navActions = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: "SignUp" })
            ]
        });

        this.props.navigation.dispatch(navActions);
    }

    onForgotPasswordPress = () => {
        var navActions = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: "ForgotPassword" })
            ]
        });

        this.props.navigation.dispatch(navActions);
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    (this.state.isLoading) ? <ActivityIndicator size={40} color={'#FE434C'} animating={true} />
                        :
                        <View>
                            <Text style={{ padding: 10 }}>Login</Text>

                            <TextInput keyboardType="email-address" autoCorrect={false} autoCapitalize="none" style={{ marginBottom: 5, width: 200, height: 40, borderWidth: 1, padding: 10 }} value={this.state.email} onChangeText={(text) => { this.setState({ email: text }) }} placeholder='Enter your Email Address' />
                            <TextInput secureTextEntry={true} autoCorrect={false} autoCapitalize="none" style={{ marginBottom: 10, width: 200, height: 40, borderWidth: 1, padding: 10 }} value={this.state.password} onChangeText={(text) => { this.setState({ password: text }) }} placeholder='Enter your Password' />

                            <TouchableOpacity style={styles.btn} onPress={this.onLoginPress}>
                                <Text style={{ color: '#fff', textTransform: 'uppercase' }}>Login</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn} onPress={this.onCreateAccountPress}>
                                <Text style={{ color: '#fff', textTransform: 'uppercase' }}>Create Account</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn} onPress={this.onForgotPasswordPress}>
                                <Text style={{ color: '#fff', textTransform: 'uppercase' }}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    contentContainer: {

    },

    btn: {
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