import React, {Component} from 'react';
import axios from 'axios';
import store from './../../../../../../store/store.jsx';

import "./armory_item_hover_azerite_essence.css";

export default class Armory_Item_Hover_Azerite_Essence extends Component {
	constructor(props) {
	    super(props);
		this.state = {}
	}

	UNSAFE_componentWillMount() {
		if (this.props.data.main_spell_tooltip !== undefined && this.props.data.main_spell_tooltip !== null) {
			try {
				axios.get("https://us.api.blizzard.com/data/wow/media/spell/"+this.props.data.main_spell_tooltip.spell.id+"?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
				   .then(result => {
						this.setState({ 
							img: result.data.assets[0].value,
						});
						var rank_lvl = "";
						const rank = this.props.data.rank;
						switch (rank) {
							case 1:
								rank_lvl = "UNCOMMON";
								break;
							case 2:
								rank_lvl = "RARE";
								break;
							case 3:
								rank_lvl = "EPIC";
								break;
							case 4:
								rank_lvl = "LEGENDARY";
								break;
							default:
								break;
						}
						this.setState({ 
							rank: rank_lvl		
						});
				    },
			    )
	   		} catch (error) {}
		} else {
			try {
				axios.get("https://us.api.blizzard.com/data/wow/media/spell/"+this.props.data.passive_spell_tooltip.spell.id+"?namespace=static-us&locale=en_US&access_token="+store.userData.accessToken+"")
				   .then(result => {
						this.setState({ 
							img: result.data.assets[0].value,
						});
						var rank_lvl = "";
						const rank = this.props.data.rank;
						switch (rank) {
							case 1:
								rank_lvl = "UNCOMMON";
								break;
							case 2:
								rank_lvl = "RARE";
								break;
							case 3:
								rank_lvl = "EPIC";
								break;
							case 4:
								rank_lvl = "LEGENDARY";
								break;
							default:
								rank_lvl = "COMMON";
								break;
						}
						this.setState({ 
							rank: rank_lvl		
						});
				    },
			    )
			} catch (error) {}
		}
  	}

    render() {
		try {
			return (
				<div className={"armory_item_hover_azerite_essence " + this.state.rank}>
					<img src={this.state.img} alt=""/>
					<div>{this.props.data.essence.name}</div>
				</div>
	        );
		} catch (error) {
			return (
    			<div className="armory_item_hover_azerite_essence xs-hide" />
    		)
		}
    }
}