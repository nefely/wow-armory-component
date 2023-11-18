import React, {Component} from 'react';

import "./armory_item_hover_set_effect.css";

export default class Armory_Item_Hover_Set_Effect extends Component {
    render() {
    	try {
			if (this.props.data.required_count <= this.props.full_data.set.items.filter(item => item.is_equipped === true).length ) {
				return (
			    	<div className="armory_item_hover_set_effect active_effect">
			    		<div>{this.props.data.display_string}</div>
					</div>
				)
			} else {
				return (
			    	<div className="armory_item_hover_set_effect">
			    		<div>{this.props.data.display_string}</div>
					</div>
				)
		    }
    	} catch (error) {
    		return (
		    	<div className="armory_item_hover_set_effect xs-hide" />
			)	
    	}
	}
}