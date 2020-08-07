import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../store/store.jsx';

import "./armory_item_hover_info_addition_slot.css";

export default class Armory_Item_Hover_Info_Addition_Slot extends Component {
    render() {
    	return(
	    	<div className="armory_item_hover_info_addition_slot">
				<div>{this.props.data.inventory_type.name}</div>
				<div>{this.props.data.item_subclass.name}</div>
			</div>
		)
    }
}