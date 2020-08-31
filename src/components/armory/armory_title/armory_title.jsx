import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../store/store.jsx';

import "./armory_title.css";

export default class Armory_Title extends Component {
	constructor(props) {
	    super(props);
		this.state = {}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
			   .then(result => {
					this.setState({ 
						characterInfo: result.data
					});
					console.log(result)
			    }
		    );
		} catch (error) {}
  	}

    render() {
    	try {
    		return (
				<div className="armory_title_info">
					<div className="armory_title_main">
						<p className="armory_title_item_level">({this.state.characterInfo.equipped_item_level})</p>
						<h1 className={"armory_title_name " + this.state.characterInfo.character_class.name.toUpperCase()}>{this.state.characterInfo.name}</h1>
						<p className="armory_title_achivement"><i className="fas fa-trophy"></i> {this.state.characterInfo.achievement_points}</p>
					</div>
					<div className="armory_title_class">
						<h6>
							<p>{this.state.characterInfo.race.name}</p>
							<p>&#8729;</p>
							<p>{this.state.characterInfo.character_class.name}</p>
							<p>&#8729;</p>
							<p>{this.state.characterInfo.active_spec.name}</p>
						</h6>
					</div>
				</div>
	        )
    	} catch (error) {
    		return (
    			<div className="armory_title_info xs-hide" />
    		)
    	}
    }
}