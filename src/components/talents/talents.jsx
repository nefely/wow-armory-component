import React, {Component} from 'react';
import axios from 'axios';
import store from './../../store/store.jsx';

import "./talents.css";

import Talent from "./talent/talent.jsx";

export default class Talents extends Component {
	constructor(props) {
	    super(props);
		this.state = {}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"/specializations?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
			    .then(result => {
                    this.setState({ 
						data: result.data.specializations.filter(item => item.specialization.name === result.data.active_specialization.name)[0].talents
                    });
                    console.log(this.state.data)
                })
		} catch (error) {}
  	}

    render() {
    	try {
	        return (
				<div id="talents">
					<div className="wrapper">
						<div className="talents_title">
							<h2>Talents</h2>
						</div>
						<div className="talents_container">
							{this.state.data.map((data,i) => {
                                return (
                                    <Talent data={data} key={i} />
                                )
                            })}
						</div>
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