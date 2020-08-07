import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../store/store.jsx';

import "./armory_item_sockets.css";

import Armory_Item_Socket from "./armory_item_socket/armory_item_socket.jsx"

export default class Armory_Item_Sockets extends Component {
	render() {
		try {
			return (
		    	<div className="armory_item_view_info_addition_sockets">
			    	{this.props.data.sockets.map((data, i) => (
						<Armory_Item_Socket data={data} key={i}/>
					))}
				</div>
			)
		} catch (error) {
			return (
    			<div className="armory_item_view_info_addition_sockets xs-hide"/>
    		)
		}
    }
}