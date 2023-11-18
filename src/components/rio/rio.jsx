import React, {Component} from 'react';
import axios from 'axios';
import store from './../../store/store.jsx';
import rio_logo from "../../../src/img/rio_logo.png";

import "./rio.css";

export default class Rio extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			isActive: true,
		}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://raider.io/api/v1/characters/profile?region="+store.userData.region+"&realm="+store.userData.realmSlug+"&name="+store.userData.characterName.charAt(0).toUpperCase() + store.userData.characterName.slice(1)+"&fields=mythic_plus_scores_by_season")
				.then(result => {
					this.setState({ 
						data: result.data ,
                    });
                    console.log(this.state.data)
				})
		} catch (error) {}
  	}
	render() {
    	try {
			if (this.state.data.mythic_plus_scores !== undefined && this.state.data.mythic_plus_scores !== null) {
				return (
					<div id="rio">
                        <div className="wrapper">
                            <div className="rio_title">
                                <img src={rio_logo} alt=""/>
                                <a href={this.state.data.profile_url} target="__blank">
                                    <i className="fas fa-globe"></i>
                                </a>
                            </div>
                            <div className="rio_container">
							<div className="rio_role_block rio_role_block_all" data-point={this.state.data.mythic_plus_scores.all}>
                                    <div className="rio_role_block_icon" />
                                    <p className="rio_role_block_point">{this.state.data.mythic_plus_scores.all}</p>
                                </div>
                                <div className="rio_role_block rio_role_block_tank" data-point={this.state.data.mythic_plus_scores.tank}>
                                    <div className="rio_role_block_icon" />
                                    <p className="rio_role_block_point">{this.state.data.mythic_plus_scores.tank}</p>
                                </div>
                                <div className="rio_role_block rio_role_block_healer" data-point={this.state.data.mythic_plus_scores.healer}>
                                    <div className="rio_role_block_icon" />
                                    <p className="rio_role_block_point">{this.state.data.mythic_plus_scores.healer}</p>
                                </div>
                                <div className="rio_role_block rio_role_block_damage" data-point={this.state.data.mythic_plus_scores.dps}>
                                    <div className="rio_role_block_icon" />
                                    <p className="rio_role_block_point">{this.state.data.mythic_plus_scores.dps}</p>
                                </div>
                            </div>
                        </div>
                    </div>
				)
			} else {
				return (
					<div className="xs-hide" />
				)
			}
    	} catch (error) {
    		return (
    			<div className="xs-hide" />
    		)
    	}
    }
}