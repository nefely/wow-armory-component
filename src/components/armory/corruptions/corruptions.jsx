import React, {Component} from 'react';

import "./corruptions.css";

import Corruptions_Hover from "./corruptions_hover/corruptions_hover.jsx"; 

export default class Corruptions extends Component {
	render() { 
    	try {
    		 return (
				<div className="corruptions">
					<div className="corruptions_icon" />
					<Corruptions_Hover data={this.props.data}/>
				</div>
	        )
		} catch (error) {
			return (
	    		<div className="corruptions xs-hide"/>
			)
		}
    }
}