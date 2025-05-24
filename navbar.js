import {useState} from 'react';
import {Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import Logo from './assets/yt_logo.jpg';

const navbar = () => {
return(
    <View style= { styles.nav}>
       <Image
        source={Logo}
        style={
            { width: 50, height: 50 }}
       />

       <TouchableOpacity>
        <Text style= {styles.buttons}> All </Text>
       </TouchableOpacity>

        <TouchableOpacity>
            <Text style= {styles.buttons}> Music </Text>
       </TouchableOpacity>

        <TouchableOpacity>
            <Text style= {styles.buttons}> Podcasts </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style= {styles.buttons} > AudioBook </Text>
       </TouchableOpacity>
       
    </View>
);
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',

    // margin: 12,
    // padding: 16,
    // marginTop: 60,
    // borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
    color: 'white',
    width: '100%'
  },
  buttons: {
    color: '#fafafa',
    backgroundColor: '#464646',
    borderRadius: 20,
    fontSize: 15,
    padding: 10
  }
});

export default navbar;