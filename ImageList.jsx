import React from 'react';
import loadStores from './loadStores';

import GalleryActions from './GalleryActions';
import GalleryStore from './GalleryStore';

class ImageList extends React.Component {
	render () {
		// this.props.images is injected from loadStores

		return (
			<ul>
				{this.props.images.map((image) => {
					return (
						<li>
							<img src={image.src} />
						</li>
					);
				})}
			</ul>
		);
	}
}

// PropTypes here

export default loadStores({
	images: GalleryStore // load GalleryStore as images props
}, ImageList);
