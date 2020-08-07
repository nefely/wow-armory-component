import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../store/store.jsx';

import "./armory_item_image.css";

export default class Armory_Item_Image extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			isLoaded: false,
		}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://us.api.blizzard.com/data/wow/media/item/"+this.props.data+"?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
			   .then(result => {
					this.setState({ 
						img: result.data.assets[0].value,
						isLoaded: true,
					});
			    },
		    )
		} catch (error) {}
	    try {
	    	if (this.props.isAzerite !== undefined && this.props.isAzerite !== null) {
				if ( this.props.isAzerite.selected_powers !== undefined && this.props.isAzerite.selected_powers !== null) {
					this.setState({ 
						isAzerite: true	
					});
				}
			}
	    } catch (error) {}
  	}

    render() {
    	try {
    		return (
				<div className={ this.state.isAzerite ? "armory_item_view_img azerite_item" : "armory_item_view_img" }>
					<img src={this.state.img} alt="" />
				</div>
	        )
    	} catch (error) {
    		return (
    			<div className="armory_item_view_img" />
    		)
    	}
    }
}