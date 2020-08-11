import React, {Component} from 'react';

import "./armory_item_hover_set_effects.css";

import Armory_Item_Hover_Set_Effect from  "./armory_item_hover_set_effect/armory_item_hover_set_effect.jsx";

export default class Armory_Item_Hover_Set_Effects extends Component {
    render() {
    	try {
			return (
		    	<div className="armory_item_hover_set_effects">
		    		{this.props.data.set.effects.map((data, i) => (
						<Armory_Item_Hover_Set_Effect data={data} key={i} full_data={this.props.data}/>
					))}
				</div>
			)
    	} catch (error) {
    		return (
				<div className="armory_item_hover_set_effects xs-hide" />
			)
    	}
    }
}