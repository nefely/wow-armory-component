import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../../store/store.jsx';

import "./armory_item_hover_azerite_power.css";

export default class Armory_Item_Hover_Azerite_Power extends Component {
    render() {
    	try {
			return (
		    	<div className="armory_item_hover_azerite_power">
		    		<div>- {this.props.data.spell_tooltip.spell.name}</div>
		    		<div> {this.props.data.spell_tooltip.description}</div>
				</div>
			)
    	} catch (error) {
    		return (
    			<div className="armory_item_hover_azerite_power xs-hide" />
    		)
    	}
		
    }
}