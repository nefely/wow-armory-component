import React, {Component} from 'react';
import axios from 'axios';
import store from './../../store/store.jsx';

import "./talents.css";

import Talent_Description from "./talent_desription/talent_desription.jsx";
import Talent_Tab from "./talent_tab/talent_tab.jsx";

export default class Talents extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			activeTab: 0,
		}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"/specializations?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
			    .then(result => {
                    this.setState({ 
						data: result.data.specializations.filter(item => item.specialization.name === result.data.active_specialization.name)[0].talents
					});
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
						<div className="talents_tab_container">
							{this.state.data.map((data,i) => {
                                return (
                                    <Talent_Tab data={data} key={i} number={i} activeTab={this.state.activeTab} triggerTab={ (newNumber) => this.setState({activeTab: newNumber}) }/>
                                )
                            })}
						</div>
						<div className="talents_description_container">
							{this.state.data.map((data,i) => {
                                return (
                                    <Talent_Description data={data} key={i} number={i} activeTab={this.state.activeTab} />
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