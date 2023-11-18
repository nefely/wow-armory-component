import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../store/store.jsx';

import "./raid_progress.css";

import Raid_Progress_Line from "./raid_progress_line/raid_progress_line.jsx";

export default class Raid_Progress extends Component {
	constructor(props) {
	    super(props);
		this.state = {}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://"+store.userData.region+".api.blizzard.com/data/wow/media/journal-instance/"+this.props.data.instance.id+"?namespace="+store.userData.nameSpaceStatic+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
				.then(result => {
					this.setState({
						raidImage: result.data.assets[0].value
					})
			    })
	    } catch (error) {}
  	}

	render() {
    	try {
	        return (
				<div className="raid_progress">
					<div className="raid_progress_image">
						<img src={this.state.raidImage} alt=""/>
					</div>
					<div className="raid_progress_title">
						<h3>{this.props.data.instance.name}</h3>
					</div>
					<div className="raid_progress_container">
						<Raid_Progress_Line data={this.props.data} data_difficulty="LFR" />
						<Raid_Progress_Line data={this.props.data} data_difficulty="NORMAL" />
						<Raid_Progress_Line data={this.props.data} data_difficulty="HEROIC" />
						<Raid_Progress_Line data={this.props.data} data_difficulty="MYTHIC" />
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