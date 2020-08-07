import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../store/store.jsx';

import "./armory_item_hover_info_addition_weapon.css";

export default class Armory_Item_Hover_Info_Addition_Weapon extends Component {
    render() {
    	if ( this.props.data.weapon !== {} && this.props.data.weapon !== undefined && this.props.data.weapon !== null  ) {
	    	return(
		    	<div className="armory_item_hover_info_addition_weapon">
		    		<div>
			    		<div>{this.props.data.weapon.damage.display_string}</div>
			    		<div>{this.props.data.weapon.attack_speed.display_string}</div>
		    		</div>
		    		<div>{this.props.data.weapon.dps.display_string}</div>
				</div>
			)
    	} else {
    		return(
		    	<div className="armory_item_hover_info_addition_weapon xs-hide"/>
			)
    	}
    }
}