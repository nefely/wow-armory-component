import React, {Component} from 'react';

import "./armory_item_hover_sockets.css";

import Armory_Item_Hover_Socket from "./armory_item_hover_socket/armory_item_hover_socket.jsx"

export default class Armory_Item_Hover_Sockets extends Component {
	render() {
    	try {
    		return (
		    	<div className="armory_item_hover_sockets">
					
			    	{this.props.data.sockets.map((data, i) => (
						<Armory_Item_Hover_Socket data={data} key={i} />
					))}
				</div>
			)
    	} catch (error) {
    		return (
    			<div className="armory_item_hover_sockets xs-hide" />
    		)
    	}
    }
}