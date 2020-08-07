import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../store/store.jsx';

import "./armory_item_hover_info_addition_spells.css";

import Armory_Item_Hover_Info_Addition_Spell from  "./armory_item_hover_info_addition_spell/armory_item_hover_info_addition_spell.jsx";

export default class Armory_Item_Hover_Info_Addition_Spells extends Component {
    render() {
    	if (this.props.data.spells !== {} && this.props.data.spells !== undefined && this.props.data.spells !== null ) {
			return(
		    	<div className="armory_item_hover_info_addition_spells">
		    		{this.props.data.spells.map((data, i) => (
						<Armory_Item_Hover_Info_Addition_Spell data={data} key={i}/>
					))}
				</div>
			)
    	} else {
    		return(
				<div className="armory_item_hover_info_addition_spells xs-hide"/>
			)
    	}
    }
}