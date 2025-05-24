import {useState} from 'react';
import {Image, ImageBackground, Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import hot from './assets/ht_cn.jpg'
import hip_hop from './assets/hip_hop.jpg'
import country from './assets/country.jpg'
import wellness from './assets/daily_wellness.png'
import pop from './assets/pop.jpg'
import rock from './assets/hard_rock.jpg'
import upbeat from './assets/upbeat.jpg'
import release from './assets/release.jpg'

const Recent_Comp = () => {
// Wanted to use a for loop to fill the content of the buttons but I wasn't sure you would allow it or not.
//   const column1 = [
//     'Hot Hits Canada',
//     'Hip-Hop Central',
//     'All About Country',
//     'Daily Wellness',
//   ];
//   const column2 = [
//     'Pop Favourites',
//     '80s Hard Rock',
//     'Upbeat Mix',
//     'Release Radar',
//   ];

return(
    <View>
    <View style={styles.grid}>
        <View style={styles.section}>

            <TouchableOpacity style= {styles.content} >
               <Image
                source={hot}
                style={
                    { width: 60, height: 60 }}
               />
                <Text style={styles.text} > Hot Hits {"\n"} Canada </Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.content} >
               <Image
                source={hip_hop}
                style={
                    { width: 60, height: 60 }}
               />
                <Text  style = {styles.text}> Hip-Hop {"\n"} Central </Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.content} >
               <Image
                source={country}
                style={
                    { width: 60, height: 60 }}
               />
                <Text style= {styles.text} > All About {"\n"} Country </Text>
            </TouchableOpacity >

            <TouchableOpacity style= {styles.content} >
               <Image
                source={wellness}
                style={
                    { width: 60, height: 60 }}
               />
                <Text style= {styles.text} > Daily {"\n"} Wellness </Text>
            </TouchableOpacity>

        </View>

        <View style={styles.section}>

            <TouchableOpacity style= {styles.content}>
               <Image
                source={pop}
                style={
                    { width: 60, height: 60 }}
               />
                <Text style= {styles.text} > Pop {"\n"} Favourites </Text>
            </TouchableOpacity >

            <TouchableOpacity style= {styles.content}>
               <Image
                source={rock}
                style={
                    { width: 60, height: 60 }}
               />
                <Text style= {styles.text} > 80s {"\n"} Hard Rock </Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.content} >
               <Image
                source={upbeat}
                style={
                    { width: 60, height: 60 }}
               />
                <Text style= {styles.text} > Upbeat {"\n"} mix</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.content}>
               <Image
                source={release}
                style={
                    { width: 60, height: 60 }}
               />
                <Text style= {styles.text} > Release {"\n"} Radar </Text>
            </TouchableOpacity>

        </View>

    </View>

   {/* Recents Section  */}
    <View style={styles.second_grid}>
        <Text style={{fontSize:30, color:"white"}}> Recents </Text>
        {/* First Row  */}
        <View style={styles.rows}>
            <ImageBackground 
            source={pop} 
            style={styles.image}
            >
            <View style={styles.image_overlay}>
                <Text style={styles.image_text}>Pop mix</Text>
            </View>
            </ImageBackground>

            <ImageBackground 
            source={hot} 
            style={styles.image}
            >
            <View style={styles.image_overlay}>
                <Text style={styles.image_text}>Hot Hits</Text>
            </View>
            </ImageBackground>

            <ImageBackground 
            source={upbeat} 
            style={styles.image}
            >
            <View style={styles.text}>
                <Text style={styles.text}>Welcome to My App</Text>
            </View>
            </ImageBackground>
            
        </View>
        {/* Second Row  */}
        <View style={styles.rows}>
            <ImageBackground 
                source={wellness} 
                style={styles.image}
            >
            <View style={styles.text}>
                <Text style={styles.text}>Welcome to My App</Text>
            </View>
            </ImageBackground>

            <ImageBackground 
            source={hip_hop} 
            style={styles.image}
            >
            <View style={styles.text}>
                <Text style={styles.text}>Welcome to My App</Text>
            </View>
            </ImageBackground>

            <ImageBackground 
            source={rock} 
            style={styles.image}
            >
            <View style={styles.text}>
                <Text style={styles.text}>Welcome to My App</Text>
            </View>
            </ImageBackground>
        </View>
    </View>
    </View>

);
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-around'
  },
  section: {
    flex: 1,                        
    justifyContent: 'space-evenly'
  },
  content: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#fafafa',
    backgroundColor: '#464646',
    borderRadius: 10,
    padding: 10,
    marginBottom:10, //How do I make this responsive?
    marginLeft: 10
  },
  text:{
    fontSize: 15,
    color: '#fafafa',
  },
//   Second component added here ( usually should go in other file but since this is simple UI design doing it here.)
 second_grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between', 
 },
 rows: {
    flexDirection:"row",
    justifyContent: 'space-evenly'
 },
 image: {
    width:120,
    height: 160,
    borderRadius: 5,
    margin:5
 },
 image_overlay: {
    backgroundColor: '#4b6b83', 
    opacity: 0.7,
    padding: 10,
    borderRadius: 5,
    color: '#ffffff'
 },
 image_text:{
    color:'black',
    fontSize: 20,
    fontWeight: 'bold'
 }
});

export default  Recent_Comp;




