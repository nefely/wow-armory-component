import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../../store/store.jsx';

import "./armory_item_hover_enchantment.css";

export default class Armory_Item_Hover_Enchantment extends Component {
	render() {
		try {
			return (
				<div className="armory_item_hover_enchantment">{this.props.data.display_string}</div>
	    	)
		} catch (error) {
			return (
				<div className="armory_item_hover_enchantment xs-hide" />
	    	)
		}
    	
    }
}