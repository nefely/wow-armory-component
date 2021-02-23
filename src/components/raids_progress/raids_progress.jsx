import React, {Component} from 'react';
import axios from 'axios';

import "./raids_progress.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from './../../store/store.jsx';

import Slider from "react-slick";
import Raid_Progress from "./raid_progress/raid_progress.jsx";

export default class Raids_Progress extends Component {
	constructor(props) {
	    super(props);
		this.state = {}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"/encounters/raids?namespace="+store.userData.nameSpace+"&locale="+store.userData.lacale+"&access_token="+store.userData.accessToken+"")
			    .then(result => {
			    	if (result.data.expansions !== null && result.data.expansions !== undefined && result.data.expansions[result.data.expansions.length-1].expansion.name == store.gameData.expansionsName) {
						this.setState({ 
							data: result.data.expansions[result.data.expansions.length-1].instances.reverse()
						});
			    	}
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
		        rows: 1,
		        arrows: false,
		        dots: false,
		        infinite: false,
				swipeToSlide: true,
				centerMode: false,
		        responsive: [
			        {
			            breakpoint: 991,
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
			            breakpoint: 767,
			            settings: {
			                slidesToShow: 1,
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
				<div id="raids_progress">
					<div className="wrapper">
						<div className="raids_progress_title">
							<h2>Raids Progress</h2>
						</div>
					</div>
					<div className="wrapper wide_wrapper">	
						<div className="raids_progress_container">
							<Slider {...settings}>
							{this.state.data.map((data , i) => {
								return(
									<Raid_Progress data={data} key={i} />
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