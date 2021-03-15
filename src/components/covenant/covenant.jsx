import React, {Component} from 'react';
import axios from 'axios';
import store from './../../store/store.jsx';

import "./covenant.css";

import Covenant_Description from "./covenant_desription/covenant_desription.jsx";
import Covenant_Tab from "./covenant_tab/covenant_tab.jsx";

export default class Covenant extends Component {
    constructor(props) {
	    super(props);
		this.state = {
			activeTab: 0,
		}
    }
    
    UNSAFE_componentWillMount() {
		try {
            axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"/soulbinds?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
			    .then(result => {
                    this.setState({ 
                        data: result.data
                    });
                    if (this.state.data.soulbinds !== undefined && this.state.data.soulbinds !== null) {
                        for ( var i = 0 ; i < this.state.data.soulbinds.length ; i++) {
                            if (this.state.data.soulbinds[i].is_active === true) {
                                this.setState({ 
                                    active_medium_data: this.state.data.soulbinds[i] 
                                });
                            }
                        }
                    }
                    
                    var chosen_covenant = ""; 
                    switch (result.data.chosen_covenant.name) {
                        case "Kyrian":
                            chosen_covenant = "Kyrian";
                            break;
                        case "Venthyr":
                            chosen_covenant = "Venthyr";
                            break;
                        case "Night Fae":
                            chosen_covenant = "Night Fae";
                            break;
                        case "Necrolord":
                            chosen_covenant = "Necrolord";
                            break;
                        default:
                            chosen_covenant = "NONE";
                            break;
                    }
                    this.setState({ 
                        chosen_covenant: chosen_covenant		
                    });
                })
            
		} catch (error) {}
    }
      
    render() {
    	try {
            return (
                <div id="covenant">
                    <div className="wrapper">
                        <div className="covenant_title">
                            <h2>
                                <span>{this.state.data.chosen_covenant.name}</span>
                                <div className="covenant_title_image" data-chosen-covenant={this.state.chosen_covenant}></div>
                                <span>Rank {this.state.data.renown_level}</span>
                            </h2>
                            <p>Medium : {this.state.active_medium_data.soulbind.name}</p>
                        </div>
                        <div className="covenant_tab_container">
                            {this.state.active_medium_data.traits.map((data,i) => {
                                return (
                                    <Covenant_Tab data={data} key={i} number={i} activeTab={this.state.activeTab} triggerTab={ (newNumber) => this.setState({activeTab: newNumber}) }/>
                                )
                            })}
                        </div>
                        <div className="covenant_description_container">
                            {this.state.active_medium_data.traits.map((data,i) => {
                                return (
                                    <Covenant_Description data={data} key={i} number={i} activeTab={this.state.activeTab} />
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