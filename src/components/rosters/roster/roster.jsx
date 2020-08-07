import React, {Component} from 'react';
import store from './../../../store/store.jsx';

import "./roster.css";

export default class Roster extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

    render() {
    	try {
			return (
		    	<li className={ (this.props.data.character.name.toLowerCase() === this.props.isActiveRoster ) ? "active_roster" : "" }>
					<button>
						<h6>{this.props.data.character.name}</h6>
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