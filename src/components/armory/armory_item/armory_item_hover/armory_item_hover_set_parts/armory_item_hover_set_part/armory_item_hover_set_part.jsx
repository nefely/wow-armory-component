import React, {Component} from 'react';

import "./armory_item_hover_set_part.css";

export default class Armory_Item_Hover_Set_Part extends Component {
    render() {
    	try {
			if (this.props.data.is_equipped === true) {
				return (
			    	<div className="armory_item_hover_set_part equiped_part">
			    		<div>{this.props.data.item.name}</div>
					</div>
				)
	    	} else {
	    		return (
			    	<div className="armory_item_hover_set_part">
			    		<div>{this.props.data.item.name}</div>
					</div>
				)
	    	}
    	} catch (error) {
    		return (
		    	<div className="armory_item_hover_set_part xs-hide" />
			)
    	}
    }
}