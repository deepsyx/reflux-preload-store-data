import React from 'react';
import Reflux from 'reflux';
import { keys, map, toPairs, reduce, concat } from 'lodash/fp';
import PureRenderMixin from 'react-pure-render-utils/mixin';

export default function loadStores (stores, Component) {
	return React.createClass({
		mixins: concat(
			[PureRenderMixin],
			map(store => Reflux.connect(store[1], store[0]), toPairs(stores))
		),

		allLoaded: false,

		isAllLoaded: function () {
			if (!this.allLoaded) {
				const storesLoaded = map(name => this.state[name].loaded, keys(stores));
				const allStoresLoaded = reduce((result, value) => result && value, true, storesLoaded);

				this.allLoaded = allStoresLoaded;
			}

			return this.allLoaded;
		},

		render: function () {
			if (this.isAllLoaded()) {
				return <Component {...this.props} {...this.state} />;
			}

			return (
				<div className={`loading animated`}>
					Loading animation here
				</div>
			);
		}
	});
}
