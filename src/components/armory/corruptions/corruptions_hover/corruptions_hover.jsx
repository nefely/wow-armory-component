import React, {Component} from 'react';

import "./corruptions_hover.css";

import Corruptions_Hover_Item from "./corruptions_hover_item/corruptions_hover_item.jsx";

export default class Corruptions_Hover extends Component {
	render() { 
    	try {
    		 return (
				<div className="corruptions_hover">
					<div className="corruptions_hover_title">
						<h6>Corruptions</h6>
					</div>
					<div className="corruptions_hover_container">
						{this.props.data.filter(item => item.spells !== undefined && item.spells !== null ).map((data , i) => {
							return(
								<Corruptions_Hover_Item data={data} key={i} />
							)
						})}
					</div>
				</div>
	        )
		} catch (error) {
			return (
	    		<div className="corruptions_hover xs-hide"/>
			)
		}
    }
}