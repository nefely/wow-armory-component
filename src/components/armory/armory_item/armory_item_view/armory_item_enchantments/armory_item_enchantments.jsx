import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../store/store.jsx';

import "./armory_item_enchantments.css";

import Armory_Item_Enchantment from "./armory_item_enchantment/armory_item_enchantment.jsx"

export default class Armory_Item_Enchantments extends Component {
	render() {
    	try {
    		return (
		    	<div className="armory_item_view_info_addition_enchantments">
			    	{this.props.data.enchantments.map((data, i) => (
						<Armory_Item_Enchantment data={data} key={i} />
					))}
				</div>
			)
    	} catch (error) {
    		return (
    			<div className="armory_item_view_info_addition_enchantments xs-hide" />
    		)
    	}
    }
}