import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../store/store.jsx';

import "./armory_item_hover_info_addition_stats.css";

import Armory_Item_Hover_Info_Addition_Stat from  "./armory_item_hover_info_addition_stat/armory_item_hover_info_addition_stat.jsx";

export default class Armory_Item_Hover_Info_Addition_Stats extends Component {
    render() {
    	if (this.props.data.stats !== {} && this.props.data.stats !== undefined && this.props.data.stats !== null ) {
			return(
		    	<div className="armory_item_hover_info_addition_stats">
		    		{this.props.data.stats.filter(stat => stat.is_negated !== true).map((data, i) => (
						<Armory_Item_Hover_Info_Addition_Stat data={data} key={i}/>
					))}
				</div>
			)
    	} else {
    		return(
				<div className="armory_item_hover_info_addition_stats xs-hide"/>
			)
    	}
    }
}