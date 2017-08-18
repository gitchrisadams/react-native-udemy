import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


const App = () => {
  {/* Pass in prop w/ this text to the header.js file. 
			
			style={ flex: 1 }} is an example of an inline style versus using const.
  */}
  return (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );
};

{/* 'albums' must match root folder/project name. */}
AppRegistry.registerComponent('albums', () => App);
