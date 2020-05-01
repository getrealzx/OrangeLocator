import React, { useContext } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'


const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext)
    
    

    return (
        <View style={styles.container} >
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
            headerText = "Sign Up for Houston Tunnels"
            errorMessage = {state.errorMessage}
            submitButtonText = "Sign Up" 
            onSubmit = {signup}
            />
            <NavLink
            routeName="Signin"
            text="Already have an account? Sign in instead!"
            />
            <NavLink
            routeName="Map"
            text="Go to Map"
            />
        </View>
    )
}



SignupScreen.navigationOptions = () =>{
    return{
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },

})

export default SignupScreen
