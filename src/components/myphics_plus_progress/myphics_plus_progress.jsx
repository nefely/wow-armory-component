import React, {Component} from 'react';
import axios from 'axios';
import store from './../../store/store.jsx';

import "./myphics_plus_progress.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Myphic_Plus_Progress from "./myphic_plus_progress/myphic_plus_progress.jsx";

export default class Myphics_Plus_Progress extends Component {
	constructor(props) {
	    super(props);
		this.state = {}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"/mythic-keystone-profile/season/"+store.gameData.seasonNumber+"?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
			    .then(result => {
					console.log(result)
					// this.setState({ 
					// data: result.data.best_runs.filter(item => item.is_completed_within_time === true) ,
					// });
					// фільт щоб забрати повторювані ключі які були в час і не в час а вибирати з більшим показником рівня
					for (var i = 0 ; i < result.data.best_runs.length ; i++ ) {
						var myphicFirst = result.data.best_runs[i].dungeon.id;
						for (var y = 0 ; y < result.data.best_runs.length ; y++ ) {
							var myphicSecond = result.data.best_runs[y].dungeon.id;
							if (myphicFirst === myphicSecond) {
								if (result.data.best_runs[i].keystone_level > result.data.best_runs[y].keystone_level) {
									result.data.best_runs[y] = result.data.best_runs[i];
								} else if (result.data.best_runs[i].keystone_level === result.data.best_runs[y].keystone_level) { 
									if (result.data.best_runs[i].is_completed_within_time === true) {
										result.data.best_runs[y] = result.data.best_runs[i];
									} else {
										result.data.best_runs[i] = result.data.best_runs[y];
									}
								// (result.data.best_runs[y].keystone_level > result.data.best_runs[i].keystone_level)
								} else {
									result.data.best_runs[i] = result.data.best_runs[y];
								}
							}
						}
					}
					var uniqueTopRun = Array.from(new Set(result.data.best_runs));
					uniqueTopRun.sort(function(a, b){return a.dungeon.id-b.dungeon.id});
					// відсіяти тайм волки (за них дають 0 рейтингу)
					uniqueTopRun = uniqueTopRun.filter(item => item.mythic_rating.rating)
					this.setState({ 
						data: uniqueTopRun ,
					});
				}
		    );
		} catch (error) {}
  	}

    render() {
    	try {
			const settings = {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		        slidesPerRow: 1,
		        rows: 1,
		        arrows: false,
		        dots: true,
		        infinite: false,
				swipeToSlide: true,
				centerMode: false,
		        responsive: [
			        {
			            breakpoint: 991,
			            settings: {
			                slidesToShow: 3,
							slidesToScroll: 1,
							slidesPerRow: 1,
							rows: 1,
			                swipeToSlide: true,
			                centerMode: false,
			            }
			        }, 
			        {
			            breakpoint: 767,
			            settings: {
			                slidesToShow: 2,
							slidesToScroll: 1,
							slidesPerRow: 1,
							rows: 1,
			                swipeToSlide: true,
			                centerMode: false,
			            }
			        },
			        {
			            breakpoint: 559,
			            settings: {
			                slidesToShow: 1,
							slidesToScroll: 1,
							slidesPerRow: 1,
							rows: 1,
			                swipeToSlide: true,
			                centerMode: true,
			            }
			        }
		        ]
		    };
	        return (
				<div id="myphics_plus_progress">
					<div className="wrapper">
						<div className="myphics_plus_progress_title">
							<h2>Mythics Progress</h2>
						</div>
					</div>
					<div className="wrapper wide_wrapper">	
						<div className="myphics_plus_progress_container">
							<Slider {...settings}>
								{this.state.data.map((data , i) => {
									return(
										<Myphic_Plus_Progress data={data} key={i} />
									)
								})}
							</Slider>
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