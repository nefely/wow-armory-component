import React, {Component} from 'react';

import "./raid_progress_line.css";

import Raid_Progress_Line_Hover from "./raid_progress_line_hover/raid_progress_line_hover.jsx";

export default class Raid_Progress_Line extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			isActive: false,
		}
	}

	UNSAFE_componentWillMount() {
		try {
			this.setState({ 
				data: this.props.data.modes.filter( item => item.difficulty.type == this.props.data_difficulty)
			});
		} catch (error) {}
  	}

	render() {
		const toggleDetails = () => {
    		this.setState({
    			isActive: !this.state.isActive,
    		})
    	}

    	try {
			return (
				<div className="raid_progress_line" onClick={toggleDetails}>
					<div className="raid_progress_line_title">
						<h6>{this.state.data[0].difficulty.type}</h6>
					</div>
					<div className="raid_progress_line_container">
						<div className="raid_progress_line_container_line" style={{width: this.state.data[0].progress.completed_count / this.state.data[0].progress.total_count * 100+"%"}} />
						<div className="raid_progress_line_container_done">
							<p>{this.state.data[0].progress.completed_count}/{this.state.data[0].progress.total_count}</p>
						</div>
					</div>
					<div className="raid_progress_line_hover_container" className={this.state.isActive ? "raid_progress_line_hover_container active_details" : "raid_progress_line_hover_container"}>
						{this.state.data[0].progress.encounters.map((data , i) => {
							return (
								<Raid_Progress_Line_Hover data={data} key={i}/>
							)
						})}
					</div>
				</div>
	        )
    	} catch (error) {
    		return (
				<div className="raid_progress_line">
					<div className="raid_progress_line_title">
						<h6>{this.props.data_difficulty}</h6>
					</div>
					<div className="raid_progress_line_container">
						<div className="raid_progress_line_container_line zero" />
						<div className="raid_progress_line_container_done" />
					</div>
				</div>
    		)
    	}
    }
}