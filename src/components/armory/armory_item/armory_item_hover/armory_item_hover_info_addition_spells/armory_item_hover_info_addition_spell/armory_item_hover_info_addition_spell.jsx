import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../../store/store.jsx';

import "./armory_item_hover_info_addition_spell.css";


export default class Armory_Item_Hover_Info_Addition_Spell extends Component {
    render() {
		if (this.props.data.display_color !== {} && this.props.data.display_color !== undefined && this.props.data.display_color !== null) {
			return(
		    	<div className="armory_item_hover_info_addition_spell" style={{color: "rgba(" + this.props.data.display_color.r + "," +this.props.data.display_color.g+ ","+this.props.data.display_color.b+ "," +this.props.data.display_color.a+"" }}>
		    		{this.props.data.description}
				</div>
			)
		} else {
			return(
		    	<div className="armory_item_hover_info_addition_spell" style={{color: "#00ff00"}}>
		    		{this.props.data.description}
				</div>
			)
		}
    }
}