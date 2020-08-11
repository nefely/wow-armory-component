import React, {Component} from 'react';

import "./corruptions_hover_item_corruption_type.css";

export default class Corruptions_Hover_Item_Corruption_Type extends Component {
	render() { 
    	try {
    		 return (
				<div className="corruptions_hover_item_corruption_type">
					<p>{this.props.data.description}</p>
				</div>
	        )
		} catch (error) {
			return (
	    		<div className="corruptions_hover_item_corruption_type xs-hide"/>
			)
		}
    }
}