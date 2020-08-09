import React, {Component} from 'react';
import axios from 'axios';
import store from './../../store/store.jsx';

import "./armory.css";

import Armory_Item from "./armory_item/armory_item.jsx";
import Armory_Title from "./armory_title/armory_title.jsx";

export default class Armory extends Component {
	constructor(props) {
	    super(props);
		this.state = {
	    	isLoaded: false,
	  	}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"/equipment?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
			   .then(result => {
					this.setState({ 
						data: result ,
						isLoaded: true,
					});
					console.log("equipped_items", this.state.data.data.equipped_items);
			    }
		    )
		} catch (error) {}
	    try {
	    	axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"/character-media?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
			   .then(img => {
					this.setState({ 
						characterImg: img.data.render_url ,
					});
			    }
		    )
	    } catch (error) {}
  	}

    render() {
    	try {
	        return (
				<div id="armory" style={{backgroundImage: "url("+this.state.characterImg+")"}}>
					<div className="wrapper">
						<Armory_Title />
						<div className="armory_items_container">
							<div className="armory_items_container_left">
								<ul>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="HEAD" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="NECK" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="SHOULDER" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="BACK" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="CHEST" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="SHIRT" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="TABARD" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="WRIST" />
									</li>
								</ul>
							</div> {/*armory_items_container_left*/}
							<div className="armory_items_container_center" />
							<div className="armory_items_container_right">
								<ul>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="HANDS" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="WAIST" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="LEGS" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="FEET" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="FINGER_1" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="FINGER_2" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="TRINKET_1" />
									</li>
									<li>
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="TRINKET_2" />
									</li>
								</ul>
							</div> {/*armory_items_container_right*/}

							<div className="armory_items_container_weapon">
								<ul>
									<li slot_type="MAIN_HAND">
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="MAIN_HAND" />
									</li>
									<li slot_type="OFF_HAND">
										<Armory_Item data={this.state.data.data.equipped_items} slot_type="OFF_HAND" />
									</li>
								</ul>
							</div> {/*armory_items_container_weapon*/}
						</div> {/*armory_items_container*/}
						</div> {/*wrapper*/}
				</div> /*armory*/
	        )
    	} catch (error) {
    		return (
    			<div id="armory" className="xs-hide" />
    		)
    	}
    }
}