import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../store/store.jsx';
import {newCharacterRender} from './../../../store/store.jsx';

import "./roster.css";

export default class Roster extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			error: false
		}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+this.props.data.character.name.toLowerCase()+"?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
				.then(result => {
					this.setState({ 
						data: result ,
					});
				})
		} catch (error) {}
  	}
	render() {
    	try {
			if ( this.props.data.character.name.toLowerCase().substr(0, this.props.inputSearchValue.length).includes(this.props.inputSearchValue.toLowerCase())) {
				return (
					<li className={ (this.props.data.character.name.toLowerCase() === store.userData.characterName.toLowerCase() ) ? "active_roster" : "" } data-character-name={this.props.data.character.name}> 
						<button onClick={newCharacterRender} data-character-name={this.props.data.character.name}>
							<h6 data-character-name={this.props.data.character.name}>
								<p className={"roster_name " + this.state.data.data.character_class.name.toUpperCase()} data-character-name={this.props.data.character.name}>{this.props.data.character.name}</p>
								<div data-character-name={this.props.data.character.name}>
									<span className="roster_class" data-character-name={this.props.data.character.name}>{this.state.data.data.character_class.name} / </span>
									<span className="roster_spec" data-character-name={this.props.data.character.name}>{this.state.data.data.active_spec.name} / </span>
									<span className="roster_itl" data-character-name={this.props.data.character.name}>{this.state.data.data.equipped_item_level}</span>
								</div>
							</h6>
						</button>
					</li>
				)
			} else {
				return (
					<li className="xs-hide" />
				)
			}
    	} catch (error) {
    		return (
    			<li className="xs-hide" />
    		)
    	}
    }
}