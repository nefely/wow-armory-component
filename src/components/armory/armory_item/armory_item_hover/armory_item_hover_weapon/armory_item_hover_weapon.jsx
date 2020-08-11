import React, {Component} from 'react';

import "./armory_item_hover_weapon.css";

export default class Armory_Item_Hover_Weapon extends Component {
    render() {
    	try {
    		return(
		    	<div className="armory_item_hover_weapon">
		    		<div>
			    		<div>{this.props.data.weapon.damage.display_string}</div>
			    		<div>{this.props.data.weapon.attack_speed.display_string}</div>
		    		</div>
		    		<div>{this.props.data.weapon.dps.display_string}</div>
				</div>
			)
    	} catch (error) {
    		return(
		    	<div className="armory_item_hover_weapon xs-hide" />
			)
    	}
    }
}