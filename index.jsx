import React from 'react';
import ReactDOM from 'react-dom';

import GalleryActions from './GalleryActions';
import ImageList from './ImageList';

class App extends React.Component {
	componentDidMount() {
		// artificially slow down the images loading
		setTimeout(() => GalleryActions.load(), 1500);
	},

	render () {
		return (
			<ImageList />
		);
	}
}

const appContainer = document.getElementById('content');

ReactDOM.render(
  	<App />,
  	appContainer
);