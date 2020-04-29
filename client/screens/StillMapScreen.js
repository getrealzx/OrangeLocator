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
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
// import MapMarker from '../components/MapMarker';
import { Ionicons } from '@expo/vector-icons';


console.disableYellowBox = true;


class StillMapScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLocationMarkers: {
        fromMarker: [0, 0],
        toMarker: [0, 0]
      },

      DistMarkers: {
        fromMarker: [0, 0],
        toMarker: [0, 0]
      },

      focus: {
        coord: [0.0],
        zoom: [0, 0]
      }

    }
  }





  render() {




    return (

      <View style={styles.container}>

        <View style={styles.zoomWrapper}>
          <ReactNativeZoomableView
            zoomEnabled={true}
            maxZoom={2}
            minZoom={1}
            zoomStep={0.15}
            initialZoom={1.5}
            bindToBorders={true}
            // onZoomAfter={this.logOutZoomState}
            style={styles.zoomableView}
          >
            <Ionicons name="ios-rocket" size={32} color="red" style={styles.icon} />

            <Image
              style={styles.image}
              source={require('../assets/images/houstonTunel.jpg')}
            // resizeMode="stretch"
            />
          </ReactNativeZoomableView>
        </View>
        <Text >{this.lastZoomLevel}</Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  header: {
    backgroundColor: '#5569ff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  zoomWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  zoomableView: {
    padding: 10,
    backgroundColor: '#000',
  },
  image: {

    // position:"absolute",
    left: 0,
    top: 0,

    flex: 1,
    width: '100%',
    height: '100%',
    // marginBottom: 10,
    // top:100,
    // left:40,
    zIndex: 0,

  },

  icon: {


    left: 200,
    top: 410,
    zIndex: 10,
    
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.32,
    // shadowRadius: 5.46,

    // elevation: 9,
  },

  testInfo: {
    fontSize: 87,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    left: 300,
    top: 300,
    zIndex: 100,
  },

  caption: {
    fontSize: 10,
    color: '#444',
    alignSelf: 'center',
  },
});


export default StillMapScreen
