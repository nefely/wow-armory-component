import React, {Component} from 'react';

import "./talent_desription.css";

export default class Talent_Description extends Component {
    render() {
    	try {
	        return (
                <div className={ this.props.number === this.props.activeTab ? "talent_description active" : "talent_description" }>
					<h3 className="talent_title">{this.props.data.talent.name}</h3>
					<div className="talent_text">{this.props.data.spell_tooltip.description}</div>
                </div>
	        )
    	} catch (error) {
    		return (
				<div className="xs-hide" />
    		)
    	}
    }
}