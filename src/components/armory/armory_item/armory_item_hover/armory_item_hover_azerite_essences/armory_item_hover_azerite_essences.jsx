import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../store/store.jsx';

import "./armory_item_hover_azerite_essences.css";

import Armory_Item_Hover_Azerite_Essence from  "./armory_item_hover_azerite_essence/armory_item_hover_azerite_essence.jsx";

export default class Armory_Item_Hover_Azerite_Essences extends Component {
    render() {
    	try {
    		return (
		    	<div className="armory_item_hover_azerite_essences">
		    		{this.props.data.azerite_details.selected_essences.map((data, i) => (
						<Armory_Item_Hover_Azerite_Essence data={data} key={i} />
					))}
				</div>
			)
    	} catch (error) {
    		return (
				<div className="armory_item_hover_azerite_essences xs-hide" />
			)
    	}
    }
}