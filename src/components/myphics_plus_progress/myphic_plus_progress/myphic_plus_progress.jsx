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
			axios.get("https://"+store.userData.region+".api.blizzard.com/data/wow/mythic-keystone/dungeon/"+this.props.data.dungeon.id+"?namespace="+store.userData.nameSpaceDynamic+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
			.then(result => {
				this.setState({
					dungeonID: result.data.dungeon.id
				})
				try {
					axios.get("https://"+store.userData.region+".api.blizzard.com/data/wow/media/journal-instance/"+this.state.dungeonID+"?namespace="+store.userData.nameSpaceStatic+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
						.then(result => {
							this.setState({
								dungeonImage: result.data.assets[0].value
							})
					    })
			    } catch (error) {}
		    })
		} catch (error) {}
  	}

    render() {
    	try {
    		if ( (this.props.data.keystone_level > 14) ) {
    			var key_rank = "LEGENDARY";
    		} 
    		else if ( (this.props.data.keystone_level <= 14) && (this.props.data.keystone_level > 9) ) {
    			var key_rank = "EPIC";
    		}
    		else if ( (this.props.data.keystone_level <= 9) && (this.props.data.keystone_level > 6) ) {
    			var key_rank = "RARE";
    		}
    		else if ( (this.props.data.keystone_level <= 6) && (this.props.data.keystone_level > 3) ) {
    			var key_rank = "UNCOMMON";
    		}
    		else {
    			var key_rank = "COMMON";
    		}	
			const isTimed = this.props.data.is_completed_within_time ? <p className="timed">In Time</p> : <p className="not_timed">Not In Time</p>
	        return (
				<div className={"myphic_plus_progress " + key_rank}>
					<div className="myphic_plus_progress_container">
						<div className="myphic_plus_progress_overlay" style={{backgroundImage: "url("+this.state.dungeonImage+")"}}>
							<h3>{this.props.data.keystone_level}</h3>
							{isTimed}
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