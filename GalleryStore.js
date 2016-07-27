import Reflux from 'reflux';
import Immutable from 'immutable';
import GalleryActions from './GalleryActions';

class GalleryRecord extends Immutable.Record({
	loaded: false,
	images: [],
}) {}

const GalleryStore = Reflux.createStore({
	init: function () {
		this.listenToMany(ResumeActions);
		this.state = new GalleryRecord();
	},

	getInitialState: function () {
		return this.state;
	},

	onLoadCompleted: function (response) {
		this.state = this.state
			.set('items', Resume.fromJS(response.data))
			.set('loaded', true);

		this.trigger(this.state);
	},

	onLoadFailed: function () {
		alert('Could not load images!');
	},
});

export default GalleryStore;
