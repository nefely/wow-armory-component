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
			    }
		    );
		} catch (error) {}
  	}

    render() {
    	try {
    		return (
				<div className="armory_title_info">
					<div className="armory_title_main">
						<p className="armory_title_item_level">
							{this.state.characterInfo.equipped_item_level}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M13.593 18.962l-6.729 7.035c-.135.142-.061.383.128.417l3.932.683a.23.23 0 00.205-.068l3.428-3.584 7.684 7.93 3.927-4.106.346-.362 3.725-3.896-7.684-7.928 3.646-3.814a.252.252 0 00.066-.213l-.654-4.112a.232.232 0 00-.398-.133l-6.853 7.167L7.485 4.401V.428A.42.42 0 007.075 0H.791a.419.419 0 00-.409.428v6.571c0 .236.183.427.409.427h3.512l9.29 11.536zm27.505 15.599l-3.8 3.972-.24.251-3.958 4.139 18.652 19.411L61.562 64l-1.671-9.882-18.793-19.557zM63.209.017h-6.283a.418.418 0 00-.409.428v3.672L45.483 13.83l-6.728-7.034c-.135-.143-.366-.065-.397.132l-.654 4.111a.253.253 0 00.066.214l3.428 3.585L4.002 53.726 2.408 63.983l9.451-1.748 37.336-39.036 3.646 3.812a.23.23 0 00.205.069l3.931-.684c.188-.031.263-.274.128-.415l-6.854-7.166L59.41 7.442h3.799a.418.418 0 00.409-.428V.444a.418.418 0 00-.409-.427z" xmlns="http://www.w3.org/2000/svg" /></svg>
						</p>
						<h1 className={"armory_title_name " + this.state.characterInfo.character_class.name.toUpperCase()}>{this.state.characterInfo.name}</h1>
						<p className="armory_title_achivement">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M51.492 3.677c-5.941 1.654-14.886 3.906-19.494 3.906-4.611 0-13.553-2.252-19.495-3.906-2.937-.815-5.875 1.255-5.875 4.144v34.684c0 1.336.657 2.597 1.778 3.415l20.792 15.176a4.765 4.765 0 002.8.904c.989 0 1.981-.3 2.805-.904L55.594 45.92c1.122-.818 1.778-2.08 1.778-3.415V7.823c-.002-2.888-2.942-4.961-5.88-4.146z" xmlns="http://www.w3.org/2000/svg" /></svg>
							{this.state.characterInfo.achievement_points}
						</p>
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