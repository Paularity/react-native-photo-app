import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ActivityIndicator, Alert } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import * as firebase from 'firebase'

export default class ForgotPasswordScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isLoading: false
        };
    }

    onResetPasswordPress = async () => {
        try {
            await Promise.all(
                [
                    firebase.auth().sendPasswordResetEmail(this.state.email),
                    this.setState({ isLoading: true })
                ]
            );
            this.setState({ isLoading: false });
            Alert.alert("Password rest email has been sent.");
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

                            <Text style={{ padding: 10 }}>Forgot Password?</Text>

                            <TextInput keyboardType="email-address" autoCorrect={false} autoCapitalize="none" style={{ marginBottom: 5, width: 200, height: 40, borderWidth: 1, padding: 10 }} value={this.state.email} onChangeText={(text) => { this.setState({ email: text }) }} placeholder='Enter your Email Address' />

                            <TouchableOpacity style={styles.btn} onPress={this.onResetPasswordPress}>
                                <Text style={{ color: '#fff', textTransform: 'uppercase' }}>Reset password</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn} onPress={this.onBackToLoginPress}>
                                <Text style={{ color: '#fff', textTransform: 'uppercase' }}>Back to login</Text>
                            </TouchableOpacity>

                        </View>
                }
            </View>
        )
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