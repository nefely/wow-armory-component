import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../store/store.jsx';

import "./armory_item_hover_azerite_powers.css";

import Armory_Item_Hover_Azerite_Power from  "./armory_item_hover_azerite_power/armory_item_hover_azerite_power.jsx";

export default class Armory_Item_Hover_Azerite_Powers extends Component {
    render() {
    	try {
			return (
		    	<div className="armory_item_hover_azerite_powers">
		    		{this.props.data.azerite_details.selected_powers.filter(power => power.spell_tooltip.spell.name !== "Azerite Empowered").map((data, i) => (
						<Armory_Item_Hover_Azerite_Power data={data} key={i} />
					)).reverse()}
				</div>
			)
		} catch (error) {
			return (
				<div className="armory_item_hover_azerite_powers xs-hide" />
			)
		}
    }
}