import React, {Component} from 'react';

import "./armory_item_view.css";

import Armory_Item_Image from "./armory_item_image/armory_item_image.jsx";
import Armory_Item_Sockets from "./armory_item_sockets/armory_item_sockets.jsx";
import Armory_Item_Enchantments from "./armory_item_enchantments/armory_item_enchantments.jsx";

export default class Armory_Item_View extends Component {
    render() { 
    	try {
    		 return (
				<div className={ this.props.data.is_corrupted ? "armory_item_view corupted" : "armory_item_view" }>
					<Armory_Item_Image data={this.props.data.item.id} isAzerite={this.props.data.azerite_details} />
					<div className="armory_item_view_info">
						<div className="armory_item_view_info_title">
							<h6>{this.props.data.name}</h6>
						</div>
						<div className="armory_item_view_info_addition">
							<div className="armory_item_view_info_addition_item_level">
								<p>{this.props.data.level.value}</p>
							</div>
							<Armory_Item_Enchantments data={this.props.data} />
							<Armory_Item_Sockets data={this.props.data} />
						</div>
					</div>
				</div>
	        )
		} catch (error) {
			return (
				<div className="armory_item_view">
					<div className="armory_item_view_img" />
				</div>
			)
		}
    }
}