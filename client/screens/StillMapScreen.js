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
      currentX: 100,
      currentY: 300,

      destX: "50%",
      destY: "60%",

      focusX: 0,
      focusY: 0,

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


  onLayout = (e) => {
    this.setState({
      width: Math.round(e.nativeEvent.layout.width),
      height: Math.round(e.nativeEvent.layout.height),
      x: e.nativeEvent.layout.x,
      y: e.nativeEvent.layout.y,
    })
  }


  render() {

    const { currentZoom } = this.state
    const zoomedIconSize = Math.round(33 / currentZoom);
    console.log(zoomedIconSize);
    // this.setState({ iconZoomedSize: 33 / this.state.currentZoom });
    // console.log('icon size', this.state.iconZoomedSize);

    // console.log(this.state.DestX[0]);



    /////////////////////////// Style /////////
    // let testX= (this.state.destX/this.state.width*100*1.5).toFixed(2)+"%";
    // let testX= Math.round(this.state.destX/this.state.width*10000/1.5)/100;
    // let testX= Math.round(this.state.destX*this.state.width/1321);
    // let testY= (this.state.height-this.state.destY).toFixed(2)+"%";
    // let testY= (this.state.destY/((1600-this.state.height)/2+this.state.height)).toString()+"%";


    //from center: (% of dis on vh )*vh = (1/2-destX)*totalheight
    //from center: (1/2-%vh from top)vh =  (1/2-destX)*totalheight
    //from center: (1/2-%vh from top)=  (1/2-destX)*totalheight)/vh
    //%vhfromTop=1/2-(1/2-destX)*totalheight)/vh;
    // let PctVHfromTop = ((1 / 2 - (((1 / 2 - this.state.destY) * 1600) / this.state.height)) * 100).toString() + "%";



    // let testY= (1-this.state.destY)*this.state.height)/1599)/this.state.height*100).toString() + "%";
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

      },
      image: {

        // position:"absolute",
        // left: 0,
        // top: 0,
        justifyContent: 'center',

        flex: 1,
        width: "100%",
        height: "100%",
        // width: '100%',
        // height: '100%',
        zIndex: 0,

      },

      currentLocationMaker: {


        left: this.state.currentX,
        top: this.state.currentY,
        zIndex: 10,


   
      },

      destMaker: {
        position: "absolute",
        // left: testX,
        // left: x,
        // left: '25%',
        top: this.state.destY,
        // top:100,
        // top: testY,
        // top: this.state.convertedY,
        left: this.state.destX,
        // top: this.stat   destY,
        zIndex: 20,


        borderColor:"white",
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

      compass: {
        position: "absolute",
        top: "5%",
        right: "5%",
        elevation:5,
        backgroundColor: "white",
        borderRadius:30,
        paddingLeft:4,
        paddingRight:4,
      }
    });


    //////////////////shadow


    //////////////////////////////// end styles


    return (

      <View style={styles.container}>

        <View style={styles.zoomWrapper} onLayout={this.onLayout}
        // onTouchStart={(e) => {console.log('touchMove',e.nativeEvent)}}
        >

          <ReactNativeZoomableView
            zoomEnabled={true}
            maxZoom={2}
            minZoom={1}
            zoomStep={0.15}
            initialZoom={1.8}
            bindToBorders={true}
            onZoomAfter={this.logOutZoomState}
            initialOffsetX={40}
            style={styles.zoomableView}
          >


            <Ionicons name="ios-rocket" size={32} color="red" style={styles.currentLocationMaker} />

            <Ionicons name="ios-pin" size={32} color="brown" style={styles.destMaker} />



            <Image
              style={styles.image}
              source={require('../assets/images/houstonTunel.jpg')}
            // resizeMode="stretch"
            />
          </ReactNativeZoomableView>
  

            <Ionicons name="ios-compass" size={50} color="red" style={styles.compass} />


        </View>



        {/* Test Params--------------- */}
        <Text >Test Zoom Level</Text>
        {/* <Text >{logOutZoomState()}</Text> */}
        <Text style={styles.testInfo}>Current Zoom:{this.state.currentZoom}</Text>
        <Text style={styles.testInfo}>DestX:{this.state.destX}</Text>
        <Text>view width: {this.state.width}</Text>
        <Text>view height: {this.state.height}</Text>
        {/* <Text>TestX: {testX}</Text>
        <Text>TestY: {testY}</Text> */}
        {/* <Text>Percent from Top {PctVHfromTop}</Text> */}


        <Button
          title="Update Your Location"
          color="green"
          onPress={() => Alert.alert('Button with adjusted color pressed, thanks')}
        />

      </View>
    );
  }
}


export default StillMapScreen
