import React, {Component} from 'react';
import axios from 'axios';
import store from './../../store/store.jsx';

import "./rosters.css";

import Roster from "./roster/roster.jsx";

export default class Rosters extends Component {
	constructor(props) {
	    super(props);
		this.state = {
	    	isLoaded: false,
	    	activeRoster: store.userData.characterName,
	  	}
	}

	UNSAFE_componentWillMount() {
	    axios.get("https://"+store.userData.region+".api.blizzard.com/data/wow/guild/"+store.userData.realmSlug+"/"+store.userData.nameSlug+"/roster?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
		    .then(result => {
				this.setState({ 
					data: result ,
					isLoaded: true,
				});
		    }
	    );
  	}

    render() {
    	try {
	        return (
				<div id="rosters">
					<div className="rosters_container">
						<div className="rosters_title">
							<h4>Rosters</h4>
						</div>
						<ul className="rosters_list">
							{this.state.data.data.members.map((data, i) => 
	                            <Roster key={i} data={data} isActiveRoster={this.state.activeRoster} />
	                        )}
						</ul>
					</div>
				</div>
	        )
    	} catch (error) {
    		return (
				<div id="rosters" className="xs-hide" />
    		)
    	}
    }
}