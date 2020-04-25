// import * as React from 'react';
// import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { SplashScreen } from 'expo';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import BottomTabNavigator from './src/navigation/BottomTabNavigator';
// import useLinking from './src/navigation/useLinking';

// const Stack = createStackNavigator();

// export default function App(props) {
//   const [isLoadingComplete, setLoadingComplete] = React.useState(false);
//   const [initialNavigationState, setInitialNavigationState] = React.useState();
//   const containerRef = React.useRef();
//   const { getInitialState } = useLinking(containerRef);

//   // Load any resources or data that we need prior to rendering the app
//   React.useEffect(() => {
//     async function loadResourcesAndDataAsync() {
//       try {
//         SplashScreen.preventAutoHide();

//         // Load our initial navigation state
//         setInitialNavigationState(await getInitialState());

//         // Load fonts
//         await Font.loadAsync({
//           ...Ionicons.font,
//           'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//         });
//       } catch (e) {
//         // We might want to provide this error information to an error reporting service
//         console.warn(e);
//       } finally {
//         setLoadingComplete(true);
//         SplashScreen.hide();
//       }
//     }

//     loadResourcesAndDataAsync();
//   }, []);

//   if (!isLoadingComplete && !props.skipLoadingScreen) {
//     return null;
//   } else {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//         <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
//           <Stack.Navigator>
//             <Stack.Screen name="Root" component={BottomTabNavigator} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
////////////////////////////////////////////////

import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import MapScreen from './src/screens/MapScreen'
import ManualUpdateScreen from './src/screens/ManualUpdateScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef'
import ChooseSiteScreen from './src/screens/ChooseSiteScreen';
import SavedListScreen from './src/screens/SavedListScreen';
import ViewDetailScreen from './src/screens/ViewDetailScreen';
import SearchResultsScreen from './src/screens/SearchResultsScreen';
import DigitalCodeScreen from './src/screens/DigitalCodeScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import AccountScreen from './src/screens/AccountScreen';

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    screenFlow: createStackNavigator({
      ChooseSite: ChooseSiteScreen,
      SavedList: SavedListScreen,
      ViewDetail: ViewDetailScreen,
      SearchResults: SearchResultsScreen,
      Map: MapScreen,
      ManualUpdate: ManualUpdateScreen,
      DigitalCode: DigitalCodeScreen
    }),
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () =>{
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </AuthProvider>
  )
}