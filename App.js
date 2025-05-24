import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import AudioBook from './AudioBook_Comp'
import Nav from './navbar';
import Recent from './Recent_Comp'
import Recent_Comp from './Recent_Comp';

export default function App() {

  return (
      <View style={styles.container}>
            <StatusBar style = 'auto' />
        <ScrollView style={styles.content} stickyHeaderIndices = {[0]}>
    
        <Nav />
        <Recent_Comp />
        <AudioBook />
        </ScrollView>
      </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  content: {
    marginTop: 40
  }
});
