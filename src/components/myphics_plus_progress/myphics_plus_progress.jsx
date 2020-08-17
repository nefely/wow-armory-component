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
			axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"/mythic-keystone-profile/season/"+store.userData.season+"?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
			    .then(result => {
					this.setState({ 
						data: result.data.best_runs.filter(item => item.is_completed_within_time === true) ,
					});
			    }
		    );
		} catch (error) {}
  	}

    render() {
    	try {
			const settings = {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        slidesPerRow: 1,
		        rows: 4,
		        arrows: false,
		        dots: false,
		        infinite: true,
		        swipeToSlide: true,
		        focusOnSelect: true,
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
			                centerMode: true,
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
			                centerMode: true,
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
				<div id="myphics_plus_progress" className="myphics_plus_progress">
					<div className="wrapper">
						<div className="myphics_plus_progress_title">
							<h2>Mythic Keystone Dungeons</h2>
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
				<div id="myphics_plus_progress" className="xs-hide" />
    		)
    	}
    }
}