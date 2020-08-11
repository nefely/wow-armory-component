import React, {Component} from 'react';

import "./corruptions_hover_item.css";

import Corruptions_Hover_Item_Corruption_Type from './corruptions_hover_item_corruption_type/corruptions_hover_item_corruption_type.jsx';

export default class Corruptions_Hover_Item extends Component {
	render() { 
    	try {
    		 return (
				<div className="corruptions_hover_item">
					{this.props.data.spells.filter(spell => spell.display_color !== undefined && spell.display_color !== null ).map((data , i) => {
						return(
							<Corruptions_Hover_Item_Corruption_Type data={data} key={i} />
						)
					})}
				</div>
	        )
		} catch (error) {
			return (
	    		<div className="corruptions_hover_item xs-hide"/>
			)
		}
    }
}