import React, {Component} from 'react';
import store from './../../../store/store.jsx';
import {newCharacterRender} from './../../../store/store.jsx';

import "./roster.css";

export default class Roster extends Component {
	render() {
    	try {
			return (
		    	<li className={ (this.props.data.character.name.toLowerCase() === store.userData.characterName.toLowerCase() ) ? "active_roster" : "" }>
					<button>
						<h6 onClick={newCharacterRender}>{this.props.data.character.name}</h6>
					</button>
				</li>
			)
    	} catch (error) {
    		return (
    			<li className="xs-hide" />
    		)
    	}
    }
}