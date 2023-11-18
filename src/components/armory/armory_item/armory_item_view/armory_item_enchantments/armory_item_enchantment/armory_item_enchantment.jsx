import React, {Component} from 'react';

import "./armory_item_enchantment.css";

export default class Armory_Item_Enchantment extends Component {
	render() {
		try {
			return (
				<div className="armory_item_view_info_addition_enchantment">{this.props.data.display_string.split("|")[0] ? this.props.data.display_string.split("|")[0] : this.props.data.display_string}</div>
	    	)
		} catch (error) {
			return (
				<div className="armory_item_view_info_addition_enchantment xs-hide" />
	    	)
		}
    }
}