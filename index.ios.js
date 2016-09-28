// Index.ios.js - Place code in here for IOS!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';

// Create a component
const App = () => (
  <View style={{ flex:1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render the component to the device screen
AppRegistry.registerComponent('albums', () => App);
