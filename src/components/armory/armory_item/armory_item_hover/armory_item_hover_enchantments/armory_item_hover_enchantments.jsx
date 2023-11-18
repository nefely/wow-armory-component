import React, {Component} from 'react';

import "./armory_item_hover_enchantments.css";

import Armory_Item_Hover_Enchantment from "./armory_item_hover_enchantment/armory_item_hover_enchantment.jsx"

export default class Armory_Item_Hover_Enchantments extends Component {
	render() {
    	try {
	    	return (
		    	<div className="armory_item_hover_enchantments">
			    	{this.props.data.enchantments.map((data, i) => (
						<Armory_Item_Hover_Enchantment data={data} key={i} />
					))}
				</div>
			)
    	} catch (error) {
    		return (
    			<div className="armory_item_hover_enchantments xs-hide" />
    		)
    	}
    }
}