import React, {Component} from 'react';
import axios from 'axios';
import store from './../../store/store.jsx';

import "./talents.css";

import Talent_Description from "./talent_desription/talent_desription.jsx";
import Talent_Tab from "./talent_tab/talent_tab.jsx";

export default class Talents extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			activeTab: 0,
		}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"/specializations?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
			    .then(result => {
                    console.log(result)
					var allTalents =  result.data.specializations.filter(item => item.specialization.name === result.data.active_specialization.name)[0].loadouts.filter((item => item.is_active === true))
					var classTalents = [...allTalents[0].selected_class_talents]
					var specTalents = [...allTalents[0].selected_spec_talents]
					var heroTalents = [...allTalents[0].selected_hero_talents]
					this.setState({
						classTalents: classTalents,
						specTalents: specTalents,
                        heroTalents: heroTalents,
						allTalents: [...classTalents , ...specTalents , ...heroTalents]
					})
                })
		} catch (error) {}
	}
		
    render() {
    	try {
	        return (
				<div id="talents">
					<div className="wrapper">
						<div className="talents_title">
							<h2>Talents</h2>
						</div>
						<div className='talent_tabs'>
							<div className='talent_tab'>
								<div className='talents_tab_title'>
									<h4>Class Talents</h4>
								</div>
								<div className="talents_tab_container">
									{this.state.classTalents.map((data,i) => {
										return (
											<Talent_Tab data={data} key={i} number={i} activeTab={this.state.activeTab} triggerTab={ (newNumber) => this.setState({activeTab: newNumber}) }/>
										)
									})}
								</div>
							</div>
							<div className='talent_tab'>
								<div className='talents_tab_title'>
									<h4>Spec Talents</h4>
								</div>
								<div className="talents_tab_container">
									{this.state.specTalents.map((data, i) => {
										return (
											<Talent_Tab data={data} key={i+this.state.classTalents.length} number={i+this.state.classTalents.length} activeTab={this.state.activeTab} triggerTab={ (newNumber) => this.setState({activeTab: newNumber}) }/>
										)
									})}
								</div>
							</div>
                            <div className='talent_tab'>
								<div className='talents_tab_title'>
									<h4>Hero Talents</h4>
								</div>
								<div className="talents_tab_container">
									{this.state.heroTalents.map((data, i) => {
										return (
											<Talent_Tab data={data} key={i+this.state.classTalents.length+this.state.specTalents.length} number={i+this.state.classTalents.length+this.state.specTalents.length} activeTab={this.state.activeTab} triggerTab={ (newNumber) => this.setState({activeTab: newNumber}) }/>
										)
									})}
								</div>
							</div>
						</div>
						<div className="talents_description_container">
							{this.state.allTalents.map((data,i) => {
                                return (
                                    <Talent_Description data={data} key={i} number={i} activeTab={this.state.activeTab} />
                                )
                            })}
						</div>
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