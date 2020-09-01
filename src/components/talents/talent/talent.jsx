import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../store/store.jsx';

import "./talent.css";

export default class Talent extends Component {
	constructor(props) {
	    super(props);
		this.state = {}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://us.api.blizzard.com/data/wow/media/spell/"+this.props.data.spell_tooltip.spell.id+"?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
			    .then(result => {
                    this.setState({ 
                        img: result.data.assets[0].value,
                    });
                })
		} catch (error) {}
  	}

    render() {
    	try {
	        return (
                <div className="talent">
                    <div className="talent_title">
                        <img src={this.state.img} alt="" />
                        <h3>{this.props.data.talent.name}</h3>
                   </div>
                   <div className="talent_description">
                        <div className="spell_description">{this.props.data.spell_tooltip.description}</div>
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