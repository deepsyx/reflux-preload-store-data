import Reflux from 'reflux';
import http from 'utils/http';

const GalleryActions = Reflux.createActions({
	load: {
		children: ['completed', 'failed']
	},
});

GalleryActions.load.listen(() => {
	http.get('/images.json')
		.then(GalleryActions.load.completed)
		.catch(GalleryActions.load.failed);
});

export default GalleryActions;
