import React, {Component} from 'react';
import axios from 'axios';
import store from '../../../store/store.jsx';

import "./covenant_desription.css";

export default class Covenant_Description extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	UNSAFE_componentWillMount() {
		try {
			if (this.props.data.trait !== undefined && this.props.data.trait !== null) {
				axios.get("https://us.api.blizzard.com/data/wow/tech-talent/"+this.props.data.trait.id+"?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
					.then(result => {
						this.setState({ 
							title: result.data.name,
							description: result.data.spell_tooltip.description,
						});
					}
				)
			}
			if (this.props.data.conduit_socket !== undefined && this.props.data.conduit_socket !== null) {
				axios.get("https://us.api.blizzard.com/data/wow/covenant/conduit/"+this.props.data.conduit_socket.socket.conduit.id+"?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
					.then(result => {
						this.setState({ 
							title: result.data.item.name,
							description: result.data.ranks[this.props.data.conduit_socket.socket.rank - 1].spell_tooltip.description,
						});
					}
				)
			}
		} catch (error) {}
	}
    render() {
    	try {
	        return (
                <div className={ this.props.number === this.props.activeTab ? "covenant_description active" : "covenant_description" }>
					<h3 className="covenant_title">{this.state.title}</h3>
					<div className="covenant_text">{this.state.description}</div>
                </div>
	        )
    	} catch (error) {
    		return (
				<div className="xs-hide" />
    		)
    	}
    }
}