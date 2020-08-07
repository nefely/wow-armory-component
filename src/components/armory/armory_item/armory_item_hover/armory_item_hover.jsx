import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../store/store.jsx';

import "./armory_item_hover.css";

import Armory_Item_Hover_Slot from "./armory_item_hover_slot/armory_item_hover_slot.jsx";
import Armory_Item_Hover_Stats from "./armory_item_hover_stats/armory_item_hover_stats.jsx";
import Armory_Item_Hover_Weapon from "./armory_item_hover_weapon/armory_item_hover_weapon.jsx";
import Armory_Item_Hover_Spells from "./armory_item_hover_spells/armory_item_hover_spells.jsx";
import Armory_Item_Hover_Azerite_Powers from "./armory_item_hover_azerite_powers/armory_item_hover_azerite_powers.jsx";
import Armory_Item_Hover_Azerite_Essences from "./armory_item_hover_azerite_essences/armory_item_hover_azerite_essences.jsx";
import Armory_Item_Hover_Sockets from "./armory_item_hover_sockets/armory_item_hover_sockets.jsx";
import Armory_Item_Hover_Enchantments from "./armory_item_hover_enchantments/armory_item_hover_enchantments.jsx";
import Armory_Item_Hover_Set_Parts from "./armory_item_hover_set_parts/armory_item_hover_set_parts.jsx";

export default class Armory_Item_Hover extends Component {
    render() {
    	try {
			return (
		    	<div className="armory_item_hover">
					<div className="armory_item_hover_info_title">
						<h6>{this.props.data.name}</h6>
						<p>Item Level: {this.props.data.level.value}</p>
					</div>
					<div className="armory_item_hover_info_addition">
						<Armory_Item_Hover_Slot data={this.props.data} />
						<Armory_Item_Hover_Weapon data={this.props.data} />
						<Armory_Item_Hover_Stats data={this.props.data} />
						<Armory_Item_Hover_Azerite_Powers data={this.props.data} />
						<Armory_Item_Hover_Azerite_Essences data={this.props.data} />
						<Armory_Item_Hover_Enchantments data={this.props.data} />
						<Armory_Item_Hover_Sockets data={this.props.data} />
						<Armory_Item_Hover_Spells data={this.props.data} />
						<Armory_Item_Hover_Set_Parts data={this.props.data} />
					</div>
				</div> 
			)
    	} catch (error) {
    		return (
    			<div className="armory_item_hover xs-hide" />
    		)
    	}
    	
    }
}