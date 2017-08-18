import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

{/* Class based version of the component 
		render() is required for a class based component.

 		componentWilMount will run when component is about to be 
		rendered to screen 
		fetch is the native react way of fetching from an api.

		state starts out as an emtpy albums array, then is set from
		data received f rom the api with responseData. 

		renderAlbums() iterates/maps through the albums pulling off each
		individual album title in the return json from api. 
		The key={album.title}... has to be a unique key, which the title is.
		Pass <AlbumDetail> the prop album={album}

		<ScrollView> Allows scrolling up and down in AlbumList.
*/}
class AlbumList extends Component {
	state = { albums: []};

	componentWillMount() {
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
			.then((response) => response.json())
			.then((responseData) => 
				this.setState({ albums: responseData }));	
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

{/* Functional version of the component */}
{/*
const AlbumList = () => {
	return (
		<View>
			<Text>Album List!!!!</Text>
		</View>
	);
};
*/}

export default AlbumList;