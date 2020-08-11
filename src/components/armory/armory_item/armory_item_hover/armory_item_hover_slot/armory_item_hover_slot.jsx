import React, {Component} from 'react';

import "./armory_item_hover_slot.css";

export default class Armory_Item_Hover_Slot extends Component {
    render() {
    	try {
			return (
		    	<div className="armory_item_hover_slot">
					<div>{this.props.data.inventory_type.name}</div>
					<div>{this.props.data.item_subclass.name}</div>
				</div>
			)
    	} catch (error) {
    		return (
    			<div className="armory_item_hover_slot xs-hide" />
    		)
    	}
    }
}