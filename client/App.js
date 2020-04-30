import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import StillMapScreen from './screens/StillMapScreen';
import { colors } from 'react-native-elements';
// import QrScannerScreen from './screens/QrScannerScreen';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details"
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Map"
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Map')}
      />

      <Button
        title="StillMap"
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('StillMap')}
      />

      <Button
        title="QR Scanner"
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('QR')}
      />

    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="StillMap" component={StillMapScreen} />
        {/* <Stack.Screen name="QR" component={QrScannerScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
    fontSize: 41,
    color: 'rgb(0,122,255)',
    
  },

})



export default App;
