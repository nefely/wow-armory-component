import React, {Component} from 'react';

import "./armory_item_hover_spell.css";

export default class Armory_Item_Hover_Spell extends Component {
    render() {
    	try {
			if ( this.props.data.display_color !== undefined && this.props.data.display_color !== null) {
				return (
			    	<div className="armory_item_hover_spell" style={{color: "rgba(" + this.props.data.display_color.r + "," +this.props.data.display_color.g+ ","+this.props.data.display_color.b+ "," +this.props.data.display_color.a+"" }}>
			    		{this.props.data.description}
					</div>
				)
			} else {
				return (
			    	<div className="armory_item_hover_spell" style={{color: "var(--green)"}}>
			    		{this.props.data.description}
					</div>
				)
			}
    	} catch (error) {
    		return (
		    	<div className="armory_item_hover_spell xs-hide" />
			)
    	}
    }
}