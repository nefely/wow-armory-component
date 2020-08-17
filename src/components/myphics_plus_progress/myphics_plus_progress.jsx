import React, {Component} from 'react';
import axios from 'axios';
import store from './../../store/store.jsx';

import "./myphics_plus_progress.css";

import Myphic_Plus_Progress from "./myphic_plus_progress/myphic_plus_progress.jsx"

export default class Myphics_Plus_Progress extends Component {
	constructor(props) {
	    super(props);
		this.state = {}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"/mythic-keystone-profile/season/"+store.userData.season+"?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
			    .then(result => {
					this.setState({ 
						data: result.data.best_runs.filter(item => item.is_completed_within_time === true) ,
					});
				    console.log(this.state.data)
			    }
		    );
		} catch (error) {}
  	}

    render() {
    	try {
	        return (
				<div id="myphics_plus_progress" className="myphics_plus_progress">
					<div className="wrapper">
						<div className="myphics_plus_progress_title">
							<h2>Mythic Keystone Dungeons</h2>
						</div>
						<div className="myphics_plus_progress_container xs-fss xs-fw">
							{this.state.data.map((data , i) => {
								return(
									<Myphic_Plus_Progress data={data} key={i} />
								)
							})}
						</div>
					</div>
				</div>
	        )
    	} catch (error) {
    		return (
				<div id="myphics_plus_progress" className="xs-hide" />
    		)
    	}
    }
}