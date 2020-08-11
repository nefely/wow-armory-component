import React, {Component} from 'react';

import "./armory_item_hover_stat.css";

export default class Armory_Item_Hover_Stat extends Component {
    render() {
    	try {
			if ( this.props.data.type.name !== "Indestructible" ) {
				return (
					<div className="armory_item_hover_stat" style={{color: "rgba(" + this.props.data.display.color.r + "," +this.props.data.display.color.g+ ","+this.props.data.display.color.b+ "," +this.props.data.display.color.a+"" }}>
			    		<div>{this.props.data.type.name}</div>
			    		<div>{this.props.data.value}</div>
			    	</div>
		    	)
			} else {
				return (
					<div className="armory_item_hover_stat" style={{color: "rgba(" + this.props.data.display.color.r + "," +this.props.data.display.color.g+ ","+this.props.data.display.color.b+ "," +this.props.data.display.color.a+"" }}>
			    		<div>{this.props.data.type.name}</div>
			    	</div>
		    	)
			}
		} catch (error) {
			return (
				<div className="armory_item_hover_stat xs-hide" />
			)
		}
    }
}