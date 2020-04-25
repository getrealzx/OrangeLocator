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
            <Button title="Go to Account Screen" onPress={() => navigation.navigate('Account')} />
            <Button title="Go to Choose Site Screen" onPress={() => navigation.navigate('ChooseSite')} />
            <Button title="Go to Saved List Screen" onPress={() => navigation.navigate('SavedList')} />
            <Button title="Go to View Detail Screen" onPress={() => navigation.navigate('ViewDetail')} />
            <Button title="Go to Search Results Screen" onPress={() => navigation.navigate('SearchResults')} />
            <Button title="Go to Map Screen" onPress={() => navigation.navigate('Map')} />
            <Button title="Go to Manual Update Screen" onPress={() => navigation.navigate('ManualUpdate')} />
            <Button title="Go to Digital Code Screen" onPress={() => navigation.navigate('DigitalCode')} />
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
