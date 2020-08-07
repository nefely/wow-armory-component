import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../store/store.jsx';

import "./armory_item_hover_stats.css";

import Armory_Item_Hover_Stat from  "./armory_item_hover_stat/armory_item_hover_stat.jsx";

export default class Armory_Item_Hover_Stats extends Component {
    render() {
    	try {
    		return (
		    	<div className="armory_item_hover_stats">
		    		{this.props.data.stats.filter(stat => stat.is_negated !== true).map((data, i) => (
						<Armory_Item_Hover_Stat data={data} key={i} />
					))}
				</div>
			)
    	} catch (error) {
    		return (
				<div className="armory_item_hover_stats xs-hide" />
			)
    	}
    }
}