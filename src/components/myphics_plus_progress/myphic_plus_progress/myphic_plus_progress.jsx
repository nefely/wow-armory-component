import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../store/store.jsx';

import "./myphic_plus_progress.css";

export default class Myphic_Plus_Progress extends Component {
	constructor(props) {
	    super(props);
		this.state = {}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://us.api.blizzard.com/data/wow/journal-instance/index?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
			.then(result => {
				var dungeon_name = "";
				if ( this.props.data.dungeon.name !== "Operation: Mechagon - Workshop" && this.props.data.dungeon.name !== "Operation: Mechagon - Junkyard" ) {
					dungeon_name = this.props.data.dungeon.name;
				} else {
					dungeon_name = "Operation: Mechagon";
				}
				this.setState({
					dungeonID: result.data.instances.filter(item => item.name === dungeon_name)[0].id
				})
				axios.get("https://us.api.blizzard.com/data/wow/media/journal-instance/"+this.state.dungeonID+"?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
				.then(result => {
					this.setState({
						dungeonImage: result.data.assets[0].value
					})
			    })
		    })
		} catch (error) {}
  	}

    render() {
    	try {
    		if ( (this.props.data.keystone_level >= 15) ) {
    			var key_rank = "LEGENDARY";
    		} 
    		else if ( (this.props.data.keystone_level <= 14) && (this.props.data.keystone_level > 9) ) {
    			var key_rank = "EPIC";
    		}
    		else if ( (this.props.data.keystone_level <= 9) && (this.props.data.keystone_level > 5) ) {
    			var key_rank = "RARE";
    		}
    		else if ( (this.props.data.keystone_level <= 5) && (this.props.data.keystone_level > 3) ) {
    			var key_rank = "UNCOMMON";
    		}
    		else {
    			var key_rank = "COMMON";
    		}	
	        return (
				<div className={"myphic_plus_progress " + key_rank}>
					<div className="myphic_plus_progress_container">
						<div className="myphic_plus_progress_overlay" style={{backgroundImage: "url("+this.state.dungeonImage+")"}}>
							<h3>{this.props.data.keystone_level}</h3>
						</div>
						<p className="myphic_plus_progress_title">{this.props.data.dungeon.name}</p>
					</div>
				</div>
	        )
    	} catch (error) {
    		return (
				<div className="xs-hide" />
    		)
    	}
    }
}