import React, {Component} from 'react';

import "./raid_progress_line_hover.css";

export default class Raid_Progress_Line_Hover extends Component {
	render() {
    	try {
			return (
				<div className="raid_progress_line_hover">
					<p className className="raid_progress_line_hover_boss_name">- {this.props.data.encounter.name}</p>
					<p className="raid_progress_line_hover_boss_kills">({this.props.data.completed_count})</p>
				</div>
	        )
    	} catch (error) {
    		return (
				<div className="xs-hide" />
    		)
    	}
    }
}