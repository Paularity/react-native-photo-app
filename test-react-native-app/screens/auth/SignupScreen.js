import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import * as firebase from 'firebase'

export default class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            isLoading: false
        };
    }

    onSignupPress = async () => {
        try {
            if (this.state.password !== this.state.passwordConfirm) {
                Alert.alert("Password do not match!");
                return;
            }
            else {
                await Promise.all(
                    [
                        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password),
                        this.setState({ isLoading: true }),
                    ]
                );

                this.setState({ isLoading: false });
                this.props.navigation.navigate('Main');
            }
        }
        catch (error) {
            Alert.alert(error.message);
            this.setState({ isLoading: false });
        }
    }

    onBackToLoginPress = () => {
        var navActions = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: "Login" })
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
                            <Text style={{ padding: 10 }}>Sign Up</Text>

                            <TextInput keyboardType="email-address" autoCorrect={false} autoCapitalize="none" style={{ marginBottom: 5, width: 200, height: 40, borderWidth: 1, padding: 10 }} value={this.state.email} onChangeText={(text) => { this.setState({ email: text }) }} placeholder='Enter your Email Address' />
                            <TextInput secureTextEntry={true} autoCorrect={false} autoCapitalize="none" style={{ marginBottom: 10, width: 200, height: 40, borderWidth: 1, padding: 10 }} value={this.state.password} onChangeText={(text) => { this.setState({ password: text }) }} placeholder='Enter your Password' />
                            <TextInput secureTextEntry={true} autoCorrect={false} autoCapitalize="none" style={{ marginBottom: 10, width: 200, height: 40, borderWidth: 1, padding: 10 }} value={this.state.passwordConfirm} onChangeText={(text) => { this.setState({ passwordConfirm: text }) }} placeholder='Confirm your Password' />

                            <TouchableOpacity style={styles.btn} onPress={this.onSignupPress}>
                                <Text style={{ color: '#fff', textTransform: 'uppercase' }}>Signup</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn} onPress={this.onBackToLoginPress}>
                                <Text style={{ color: '#fff', textTransform: 'uppercase' }}>Back to Login</Text>
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