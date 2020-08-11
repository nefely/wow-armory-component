import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../../store/store.jsx';

import "./armory_item_hover_socket.css";

export default class Armory_Item_Hover_Socket extends Component {
	constructor(props) {
	    super(props);
		this.state = {}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://us.api.blizzard.com/data/wow/media/item/"+this.props.data.media.id+"?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
			   .then(result => {
					this.setState({ 
						img: result.data.assets[0].value,
					});
			    }
		    )
		} catch (error) {}
  	}

    render() {
    	try {
    		return (
	    		<div className="armory_item_hover_socket">
	    			<div>
						<img src={this.state.img} alt=""/>
					</div>
					<p>{this.props.data.display_string}</p>
	    		</div>
	    	)
    	} catch (error) {
    		return (
	    		<div className="armory_item_hover_socket">
	    			<div />
	    		</div>
	    	)
    	}
	    	
	    	
    }
}