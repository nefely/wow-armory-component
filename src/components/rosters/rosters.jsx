import React, {Component} from 'react';
import axios from 'axios';
import store from './../../store/store.jsx';

import "./rosters.css";

import Roster from "./roster/roster.jsx";

export default class Rosters extends Component {
	constructor(props) {
	    super(props);
		this.state = {
	    	isVisible: false,
	  	}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://"+store.userData.region+".api.blizzard.com/data/wow/guild/"+store.userData.realmSlug+"/"+store.userData.nameSlug+"/roster?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
			    .then(result => {
					this.setState({ 
						data: result ,
					});
			    }
		    );
		} catch (error) {}
  	}

    render() {
    	const toggleRosterList = () => {
    		this.setState({
    			isVisible: !this.state.isVisible,
    		})
    	}

    	try {
	        return (
				<div id="rosters" className={ this.state.isVisible ? "isVisible" : ""}>
					<div className="rosters_container">
						<div className="xs-fbc rosters_top_container">
							<div className="rosters_hover_button">
								<button onClick={toggleRosterList}><i className={ this.state.isVisible ? "fas fa-times" : "fas fa-users"}></i></button>
							</div>
							<div className="rosters_title">
								<h4>Rosters</h4>
							</div>
						</div>
						<ul className="rosters_list">
							{this.state.data.data.members.map((data, i) => 
	                            <Roster key={i} data={data} />
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