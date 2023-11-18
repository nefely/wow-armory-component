import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../../store/store.jsx';

import "./armory_item_socket.css";

export default class Armory_Item_Socket extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			isLoaded: false,
		}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://us.api.blizzard.com/data/wow/media/item/"+this.props.data.media.id+"?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
			   .then(result => {
					this.setState({ 
						img: result.data.assets[0].value,
						isLoaded: true,
					});
			    }
		    )
		} catch (error) {}
  	}

    render() {
    	try {
    		return (
	    		<div className={ this.props.data.socket_type.type == "DOMINATION" ? "armory_item_view_info_addition_socket armory_item_view_info_addition_socket_domination" : "armory_item_view_info_addition_socket"}>
					<img src={this.state.img} alt="" />
					<p>{this.props.data.display_string}</p>
	    		</div>
	    	)
    	} catch (error) {
    		return (
	    		<div className="armory_item_view_info_addition_socket xs-hide" />
	    	)
    	}
    }
}