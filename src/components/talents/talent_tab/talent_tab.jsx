import React, {Component} from 'react';
import axios from 'axios';
import store from '../../../store/store.jsx';

import "./talent_tab.css";

export default class Talent_Tab extends Component {
	constructor(props) {
	    super(props);
		this.state = {}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://us.api.blizzard.com/data/wow/media/spell/"+this.props.data.tooltip.spell_tooltip.spell.id+"?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
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
                <div className={ [this.props.number === this.props.activeTab ? " talent_tab active " : " talent_tab " , this.props.data.tooltip.spell_tooltip.cast_time === "Passive" ? " passive " : "  "] }  onClick={ (newNumber) => this.props.triggerTab(this.props.number) }>
                    <img src={this.state.img} alt="" />
                </div>
	        )
    	} catch (error) {
    		return (
				<div className="xs-hide" />
    		)
    	}
    }
}