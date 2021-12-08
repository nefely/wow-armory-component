import React, {Component} from 'react';
import axios from 'axios';
import store from '../../../store/store.jsx';

import "./covenant_tab.css";

export default class Covenant_Tab extends Component {
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
							skill_id: result.data.spell_tooltip.spell.id
						});
						try {
							axios.get("https://us.api.blizzard.com/data/wow/media/spell/"+this.state.skill_id+"?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
							.then(result => {
								this.setState({ 
									img: result.data.assets[0].value,
								});
							});
						} catch (error) {}
					}
				)
			} 
			if (this.props.data.conduit_socket !== undefined && this.props.data.conduit_socket !== null) {
				axios.get("https://us.api.blizzard.com/data/wow/covenant/conduit/"+this.props.data.conduit_socket.socket.conduit.id+"?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
					.then(result => {
						this.setState({ 
							socket_id: result.data.item.id
						});
						try {
							axios.get("https://us.api.blizzard.com/data/wow/media/item/"+this.state.socket_id+"?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
							.then(result => {
								this.setState({ 
									img: result.data.assets[0].value,
								});
							});
						} catch (error) {}

						var socket_type = ""; 
						switch (result.data.socket_type.type) {
							case "POTENCY":
								socket_type = "POTENCY";
								break;
							case "ENDURANCE":
								socket_type = "ENDURANCE";
								break;
							case "FINESSE":
								socket_type = "FINESSE";
								break;
							default:
								socket_type = "NONE";
								break;
						}
						this.setState({ 
							socket_type: socket_type		
						});
					}
				)
			}
		} catch (error) {}
		
  	}

    render() {
    	try {
	        return (
                <div 
				className={ this.props.number === this.props.activeTab ? "covenant_tab active" : "covenant_tab"} 
				// data-type={ this.state.socket_type !== undefined ? "covenant-conduit" : "covenant-skill"}
				onClick={ (newNumber) => this.props.triggerTab(this.props.number) }
				>
                    <img src={this.state.img} alt="" />
					<div className="socket_type" data-cocket-type={this.state.socket_type}></div>
                </div>
	        )
    	} catch (error) {
    		return (
				<div className="xs-hide" />
    		)
    	}
    }
}