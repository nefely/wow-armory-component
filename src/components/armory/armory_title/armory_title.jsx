import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../store/store.jsx';

import "./armory_title.css";

export default class Armory_Title extends Component {
	constructor(props) {
	    super(props);
		this.state = {
	    	isLoaded: false,
	  	}
	}

	UNSAFE_componentWillMount() {
	    axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"/appearance?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
		   .then(result => {
				this.setState({ 
					characterInfo: result.data ,
					isLoaded: true,
				});
		    }
	    );
  	}

    render() {
    	try {
    		return (
				<div className="armory_title_info">
					<h1 className={"armory_title_name " + this.state.characterInfo.playable_class.name.toUpperCase()}>{this.state.characterInfo.character.name}</h1>
					<div className="armory_title_class">
						<h6>
							<p>{this.state.characterInfo.playable_race.name}</p>
							<p>&#8729;</p>
							<p>{this.state.characterInfo.playable_class.name}</p>
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