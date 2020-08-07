import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../store/store.jsx';

import "./armory_item.css";

import Armory_Item_View from "./armory_item_view/armory_item_view.jsx";
import Armory_Item_Hover from "./armory_item_hover/armory_item_hover.jsx";

export default class Armory_Item extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			isLoaded: false,
		}
	}

  	UNSAFE_componentWillMount() {
  		try {
			if (this.props.data !== undefined && this.props.data !== null ) {
		  		for ( var i = 0 ; i < this.props.data.length ; i++ ) {
		    		if (this.props.data[i].slot.type === this.props.slot_type) {
		    			this.setState({
		    				data: this.props.data[i],
		    				isLoaded: true,
		    			});
		    		}
		    	}
	    	}
  		} catch (error) {}
  	}

    render() { 
    	try {
    		 return (
				<div className={this.state.data.quality.type + " armory_item"}>
					<Armory_Item_View data={this.state.data} />
					<Armory_Item_Hover data={this.state.data} />
				</div>
	        )
		} catch (error) {
			return (
	    		<div className="armory_item">
					<div className="armory_item_view">
						<div className="armory_item_view_img"></div>
					</div>
				</div>
			)
		}
    }
}