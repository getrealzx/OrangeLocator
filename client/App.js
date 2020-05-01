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
import StillMapScreen from './src/screens/StillMapScreen';
const switchNavigator = createSwitchNavigator({
  // ResolveAuth: ResolveAuthScreen,
  // loginFlow: createStackNavigator({
  //   Signup: SignupScreen,
  //   Signin: SigninScreen
  // }),
  mainFlow: createBottomTabNavigator({
    screenFlow: createStackNavigator({
      ChooseSite: ChooseSiteScreen,
      SavedList: SavedListScreen,
      ViewDetail: ViewDetailScreen,
      SearchResults: SearchResultsScreen,
      ManualUpdate: ManualUpdateScreen,
      DigitalCode: DigitalCodeScreen,
    }),
    ManualUpdate: ManualUpdateScreen,
    Account: AccountScreen,
    Map: MapScreen,
    StillMap:StillMapScreen,
    




    loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </AuthProvider>
  )
}