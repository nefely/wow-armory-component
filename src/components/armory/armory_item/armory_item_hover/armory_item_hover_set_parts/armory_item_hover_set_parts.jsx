import React, {Component} from 'react';

import "./armory_item_hover_set_parts.css";

import Armory_Item_Hover_Set_Part from  "./armory_item_hover_set_part/armory_item_hover_set_part.jsx";
import Armory_Item_Hover_Set_Effects from  "./armory_item_hover_set_effects/armory_item_hover_set_effects.jsx";

export default class Armory_Item_Hover_Set_Parts extends Component {
    render() {
    	try {
			return (
		    	<div className="armory_item_hover_set_parts">
		    		<div className="armory_item_hover_set_name">{this.props.data.set.display_string}</div>
		    		{this.props.data.set.items.map((data, i) => (
						<Armory_Item_Hover_Set_Part data={data} key={i} />
					))}
		    		<Armory_Item_Hover_Set_Effects data={this.props.data} />
				</div>
			)
    	} catch (error) {
    		return (
				<div className="armory_item_hover_set_parts xs-hide" />
			)
    	}
    }
}