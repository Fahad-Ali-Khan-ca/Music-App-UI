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
            {/* Better approach would be to make a function and pass the req text+img as arg but I'm not sure if you've allowed that */}
            <View style={styles.rows}>
                <View style={styles.image_view}>
                    <ImageBackground 
                        source={pop} 
                        style={styles.image}
                        >
                        <View style={styles.image_overlay}>
                            <Text style={styles.image_text}>Pop mix</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.bottom_text_view}>
                        <Text style={styles.bottom_text}> Playlist</Text>
                        <Text style={styles.bottom_text}> User 1</Text>
                    </View>

                </View>


                <View style={styles.image_view}>
                    <ImageBackground 
                        source={hot} 
                        style={styles.image}
                        >
                        <View style={styles.image_overlay}>
                            <Text style={styles.image_text}>Hot hits</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.bottom_text_view}>
                        <Text style={styles.bottom_text}> Playlist</Text>
                        <Text style={styles.bottom_text}> User 1</Text>
                    </View>

                </View>

                <View style={styles.image_view}>
                    <ImageBackground 
                        source={upbeat} 
                        style={styles.image}
                        >
                        <View style={styles.image_overlay}>
                            <Text style={styles.image_text}>Upbeat Mix</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.bottom_text_view}>
                        <Text style={styles.bottom_text}> Playlist</Text>
                        <Text style={styles.bottom_text}> User 1</Text>
                    </View>

                </View>
                
            </View>
            {/* Second Row  */}
            <View style={styles.rows}>
                <View style={styles.image_view}>
                    <ImageBackground 
                        source={wellness} 
                        style={styles.image}
                        >
                        <View style={styles.image_overlay}>
                            {/* Not sure I'm allowed to use numberOfLines ellipsizeMode this but It would work fine without it even 
                            Just added for my clarity */}
                            <Text style={styles.image_text} numberOfLines={1} ellipsizeMode="tail">Daily Well...</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.bottom_text_view}>
                        <Text style={styles.bottom_text}> Playlist</Text>
                        <Text style={styles.bottom_text}> User 1</Text>
                    </View>

                </View>

                <View style={styles.image_view}>
                    <ImageBackground 
                        source={hip_hop} 
                        style={styles.image}
                        >
                        <View style={styles.image_overlay}>
                            <Text style={styles.image_text} numberOfLines={1} ellipsizeMode="tail" >Hip-Hop Central</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.bottom_text_view}>
                        <Text style={styles.bottom_text}> Playlist</Text>
                        <Text style={styles.bottom_text}> User 1</Text>
                    </View>

                </View>

                <View style={styles.image_view}>
                    <ImageBackground 
                        source={rock} 
                        style={styles.image}
                        >
                        <View style={styles.image_overlay}>
                            <Text style={styles.image_text} numberOfLines={1} ellipsizeMode="tail" >80s Hard Rock</Text>
                        </View>
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

 },
 image_view: {
    width:120,
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

export default  Recent_Comp;




