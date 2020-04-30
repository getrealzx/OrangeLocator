import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// import { MonoText } from '../components/StyledText';

import MapView, { Polyline, Marker, Callout } from 'react-native-maps';
// import React, { useEffect, useState } from 'react';
// import {safeAreaView} from 'react-navigation';
// import {Text } from 'react-native-elements';

import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import '../components/_mockLocations';



class MapScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      region: {
        latitude: 29.756295,
        longitude: -95.362869,
        latitudeDelta: 0.00412,
        longitudeDelta: 0.0121,
      },

      markers: [{
        title: 'start',
        coordinates: {
          latitude: 29.756295,
          longitude: -95.362869
        },
      },
      {
        title: 'end',
        coordinates: {
          latitude: 29.756290,
          longitude: -95.362874
        },
      }]

    }
  }




  render() {

    // const [err, setErr] = useState(null);

    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        }, (location) => {
          console.log(location);

        })
      } catch (e) {
        setErr(e);
      }

    }





    // useEffect(() => {
    //   startWatching();
    // }, []
    // );



    let points = [];
    for (let i = 0; i < 20; i++) {
      if (i % 2 === 0) {
        points.push({
          latitude: 29.756295 + i * 0.00001,
          longitude: -95.362869 + i * 0.0001
        });
      } else {
        points.push({
          latitude: 29.756295 - i * 0.00001,
          longitude: -95.362869 + i * 0.0001
        });
      }

    }



    return (
      <>
        <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <Text>This is Map Page</Text>
        </View>
        <View>
          <MapView style={styles.map}

            initialRegion={{
              latitude: 29.756295,
              longitude: -95.362869,
              latitudeDelta: 0.00412,
              longitudeDelta: 0.0121,
            }}
          >

            <Polyline coordinates={points}
              strokeColo={"orange"}
              strokeWidth={5}

            />

            {this.state.markers.map(marker => (
              <MapView.Marker
                coordinate={marker.coordinates}
                title={marker.title}
              />
            ))}




          </MapView>
          {/* {err ? <Text> Please enable location services </Text>: null} */}




        </View>

      </>
    )
  }

}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  map: {
    height: 800
  }
});


export default MapScreen
