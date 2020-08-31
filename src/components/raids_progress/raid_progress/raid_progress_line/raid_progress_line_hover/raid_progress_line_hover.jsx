import React, {Component} from 'react';

import "./raid_progress_line_hover.css";

export default class Raid_Progress_Line_Hover extends Component {
	render() {
    	try {
			return (
				<div className="raid_progress_line_hover">
					<p>- {this.props.data.encounter.name}</p>
				</div>
	        )
    	} catch (error) {
    		return (
				<div className="xs-hide" />
    		)
    	}
    }
}