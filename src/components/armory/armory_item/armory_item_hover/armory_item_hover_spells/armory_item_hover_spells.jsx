import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../store/store.jsx';

import "./armory_item_hover_spells.css";

import Armory_Item_Hover_Spell from  "./armory_item_hover_spell/armory_item_hover_spell.jsx";

export default class Armory_Item_Hover_Spells extends Component {
    render() {
    	try {
    		return (
		    	<div className="armory_item_hover_spells">
		    		{this.props.data.spells.map((data, i) => (
						<Armory_Item_Hover_Spell data={data} key={i} />
					))}
				</div>
			)
    	} catch (error) {
    		return (
				<div className="armory_item_hover_spells xs-hide" />
			)
    	}
    }
}