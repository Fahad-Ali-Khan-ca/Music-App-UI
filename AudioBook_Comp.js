import { useState } from "react";
import { ImageBackground, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import pop from './assets/pop.jpg'


const AudioBook = () => {
return(
    <View style={styles.container}>
        <Text style={styles.text}>
            Audiobooks for you 
        </Text>

        <View style={styles.section}>
            <View style={styles.rows}>
                <View style={styles.image_view}>
                    <ImageBackground 
                        source={pop} 
                        style={styles.image}
                        >
                    </ImageBackground>
                    <View style={styles.bottom_text_view}>
                        <Text style={styles.bottom_text}> Playlist</Text>
                        <Text style={styles.bottom_text}> User 1</Text>
                    </View>

                </View>
                <View style={styles.image_view}>
                    <ImageBackground 
                        source={pop} 
                        style={styles.image}
                        >
                    </ImageBackground>
                    <View style={styles.bottom_text_view}>
                        <Text style={styles.bottom_text}> Playlist</Text>
                        <Text style={styles.bottom_text}> User 1</Text>
                    </View>

                </View>
            </View>

            <View style={styles.rows}>
                <View style={styles.image_view}>
                    <ImageBackground 
                        source={pop} 
                        style={styles.image}
                        >
                    </ImageBackground>
                    <View style={styles.bottom_text_view}>
                        <Text style={styles.bottom_text}> Playlist</Text>
                        <Text style={styles.bottom_text}> User 1</Text>
                    </View>

                </View>
                    
            </View>
        </View>

    </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
//   Audiobook view can be divided into two rows with three elements
  section:{

  },
  rows: {
    flexDirection:"row",
    justifyContent: 'flex-start'
  }, 
  text: {
    color: 'white',
    fontSize: 30
  },
 image: {
    width:160,
    height: 175,
    borderRadius: 5,

 },
 image_view: {
    width:160,
    margin: 5
    
 },
 image_overlay: {
    backgroundColor: 'rgba(75, 107, 131, 0.5)',  
    padding: 10,
    color: '#ffffff',
 },
 image_text:{
    color:'white',
    fontSize: 18,
    fontWeight: 'bold'
 },
 bottom_text_view:{
   width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#464646',
    borderRadius:2
    
 },
 bottom_text: {
    color:'white',
    fontSize:15,
   
 }

});

export default AudioBook;
