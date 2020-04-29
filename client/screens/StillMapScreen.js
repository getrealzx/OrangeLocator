import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
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
      currentLocationMarker: {
        x: "",
        y: "",
      },

      DestX: "25%",
      DestY: "53.5",


      focus: {
        coord: [0.0],
        zoom: [0, 0]
      },

      currentZoom: 1,
      iconZoomedSize: 33,

    }
  }

  logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
    // console.log('');
    // console.log('');
    // console.log('-------------');
    // console.log('Event: ', event);
    // console.log('GestureState: ', gestureState);
    // console.log('ZoomableEventObject: ', zoomableViewEventObject);
    // console.log('');
    // console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
    this.setState({ currentZoom: zoomableViewEventObject.zoomLevel });
  }


  render() {

    const { currentZoom } = this.state

    const calcZoom = 33 / currentZoom

    const zoomedIconSize = Math.round(calcZoom);

    console.log(zoomedIconSize);
    // this.setState({ iconZoomedSize: 33 / this.state.currentZoom });
    // console.log('icon size', this.state.iconZoomedSize);

    // console.log(this.state.DestX[0]);



/////////////////////////// Style /////////


let x = this.statDestX;
console.log("DestX is ------------:", this.state.DestX)
// let x = "75%";
// console.log(this.stat    DestX);
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

  icon1: {


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

  icon2: {
    position: "absolute",
    left: this.state.DestX,
    // left: x,
    // left: '25%',
    top: "53.75%",
    // left: this.stat    DestX,
    // top: this.stat   DestY,
    zIndex: 20,

  },

  testInfo: {
    fontSize: 12,
    color: 'black',

    zIndex: 100,
  },

  caption: {
    fontSize: 10,
    color: '#444',
    alignSelf: 'center',
  },
});


    //////////////////////////////// end styles


    return (

      <View style={styles.container}>

        <View style={styles.zoomWrapper}
        // onTouchStart={(e) => {console.log('touchMove',e.nativeEvent)}}
        >

          <ReactNativeZoomableView
            zoomEnabled={true}
            maxZoom={2}
            minZoom={1}
            zoomStep={0.15}
            initialZoom={1.5}
            bindToBorders={true}
            onZoomAfter={this.logOutZoomState}
            style={styles.zoomableView}
          >
            <Ionicons name="ios-rocket" size={zoomedIconSize} color="red" style={styles.icon1} />
            <Ionicons name="ios-pin" size={zoomedIconSize} color="brown" style={styles.icon2} />

            <Image
              style={styles.image}
              source={require('../assets/images/houstonTunel.jpg')}
            // resizeMode="stretch"
            />
          </ReactNativeZoomableView>
        </View>



        {/* Test Params--------------- */}
        <Text >Test Zoom Level</Text>
        {/* <Text >{logOutZoomState()}</Text> */}
        <Text style={styles.testInfo}>Current Zoom:{this.state.currentZoom}</Text>
        <Text style={styles.testInfo}>DestX:{this.state.DestX}</Text>

        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed, thanks')}
        />

      </View>
    );
  }
}


export default StillMapScreen
