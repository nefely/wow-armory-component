import React, {Component} from 'react';
import axios from 'axios';
import store from './../../store/store.jsx';

import "./stats.css";

export default class Stats extends Component {
	constructor(props) {
	    super(props);
		this.state = {}
	}

	UNSAFE_componentWillMount() {
		try {
			axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"/statistics?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
			    .then(result => {
                   this.setState({ 
						crit_rating: result.data.melee_crit.rating,
						crit_value: result.data.melee_crit.value.toFixed(2),
						haste_rating: result.data.melee_haste.rating,
						haste_value: result.data.melee_haste.value.toFixed(2),
						mastery_rating: result.data.mastery.rating,
						mastery_value: result.data.mastery.value.toFixed(2),
						versatility_rating: result.data.versatility,
						versatility_value: result.data.versatility_damage_done_bonus.toFixed(2),
                    });
					this.setState({
						all_ratio_units: this.state.crit_rating + this.state.haste_rating + this.state.mastery_rating + this.state.versatility_rating,
					})
					this.setState({
						crit_ratio_units: ((this.state.crit_rating / this.state.all_ratio_units) * 100).toFixed(2) + "%",
						haste_ratio_units: ((this.state.haste_rating / this.state.all_ratio_units) * 100).toFixed(2) + "%",
						mastery_ratio_units: ((this.state.mastery_rating / this.state.all_ratio_units) * 100).toFixed(2) + "%",
						versatility_ratio_units: ((this.state.versatility_rating / this.state.all_ratio_units) * 100).toFixed(2) + "%",
					})
                })
		} catch (error) {}
  	}

    render() {
    	try {
	        return (
				<div id="stats">
					<div className="wrapper">
						<div className="stats_title">
							<h2>Secondary Stats</h2>
						</div>
						<div className="stats_container">
							<div className="crit">
								<h3>Crit</h3>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g xmlns="http://www.w3.org/2000/svg" id="critical-strike"><path d="M57.355 42.637A27.245 27.245 0 0059.501 32c0-3.685-.724-7.262-2.146-10.637V6.756H42.794a27.168 27.168 0 00-10.683-2.172c-3.702 0-7.295.733-10.683 2.172H6.867v14.606A27.256 27.256 0 004.722 32c0 3.687.724 7.264 2.145 10.637v14.607h14.561a27.19 27.19 0 0010.683 2.173c3.701 0 7.294-.734 10.683-2.173h14.561V42.637zm-1.5-34.381v10.068a27.462 27.462 0 00-1.021-1.636c-.065-.098-.138-.19-.204-.286a27.278 27.278 0 00-1.188-1.591c-.13-.161-.26-.322-.393-.481a27.235 27.235 0 00-1.545-1.704 27.292 27.292 0 00-2.174-1.94 27.119 27.119 0 00-1.573-1.182c-.102-.071-.2-.147-.303-.217a27.755 27.755 0 00-1.642-1.031h10.043zm-47.488 0h10.042c-.562.324-1.108.67-1.643 1.032-.102.069-.199.145-.3.215-.541.376-1.066.772-1.577 1.185a27.331 27.331 0 00-2.173 1.939l-.017.018a27.115 27.115 0 00-1.919 2.164 26.908 26.908 0 00-1.19 1.593c-.066.096-.138.188-.203.285-.358.533-.7 1.077-1.021 1.636V8.256zm0 47.488V45.676c.321.56.664 1.105 1.022 1.638.064.096.135.186.2.281a27.14 27.14 0 001.581 2.072c.494.587 1.002 1.16 1.543 1.702l.002.002a27.154 27.154 0 002.173 1.94c.512.414 1.037.81 1.579 1.187.101.07.197.146.299.215.535.361 1.081.707 1.642 1.031H8.367zm13.502.062A25.834 25.834 0 018.306 42.2 25.768 25.768 0 016.222 32c0-3.538.701-6.969 2.084-10.199A25.836 25.836 0 0121.869 8.194a25.696 25.696 0 0110.242-2.111c3.553 0 6.998.71 10.242 2.111A25.838 25.838 0 0155.916 21.8 25.769 25.769 0 0158.001 32c0 3.536-.701 6.968-2.085 10.199a25.828 25.828 0 01-13.563 13.606 25.693 25.693 0 01-10.242 2.111 25.679 25.679 0 01-10.242-2.11zm33.986-.062H45.813c.562-.324 1.108-.67 1.642-1.031.103-.069.2-.146.302-.216a27.52 27.52 0 001.571-1.181c.163-.132.325-.263.484-.398a27.704 27.704 0 001.69-1.541l.035-.038a26.998 26.998 0 001.907-2.152c.412-.513.807-1.04 1.182-1.583.068-.098.141-.192.208-.292.357-.532.699-1.076 1.02-1.635v10.067z"/><path d="M32.111 29.689a2.989 2.989 0 100 5.977 2.989 2.989 0 000-5.977z"/><path d="M41.603 33.535l9.219-.857-9.219-.857a9.542 9.542 0 00-8.634-8.633l-.857-9.218-.857 9.218c-4.574.41-8.224 4.06-8.634 8.633l-9.219.857 9.219.857c.41 4.573 4.06 8.224 8.634 8.633l.857 9.218.857-9.218c4.573-.41 8.224-4.06 8.634-8.633zm-8.527 7.472l.215-2.313h-2.36l.215 2.313a8.399 8.399 0 01-7.365-7.364l2.313.215v-2.359l-2.313.215a8.399 8.399 0 017.365-7.364l-.215 2.313h2.36l-.215-2.313a8.399 8.399 0 017.365 7.364l-2.314-.215v2.359l2.314-.215a8.398 8.398 0 01-7.365 7.364z"/></g></svg>
								<div>
									<p>{this.state.crit_value}%</p>
									<p>{this.state.crit_rating}</p>
								</div>
							</div>
							<div className="haste">
								<h3>Haste</h3>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g xmlns="http://www.w3.org/2000/svg" id="haste"><path d="M57.355 42.637A27.245 27.245 0 0059.501 32c0-3.685-.724-7.262-2.146-10.637V6.756H42.794a27.168 27.168 0 00-10.683-2.172c-3.702 0-7.295.733-10.683 2.172H6.867v14.606A27.256 27.256 0 004.722 32c0 3.687.724 7.264 2.145 10.637v14.607h14.561a27.19 27.19 0 0010.683 2.173c3.701 0 7.294-.734 10.683-2.173h14.561V42.637zm-1.5-34.381v10.068a27.462 27.462 0 00-1.021-1.636c-.065-.098-.138-.19-.204-.286a27.278 27.278 0 00-1.188-1.591c-.13-.161-.26-.322-.393-.481a27.235 27.235 0 00-1.545-1.704 27.292 27.292 0 00-2.174-1.94 27.119 27.119 0 00-1.573-1.182c-.102-.071-.2-.147-.303-.217a27.755 27.755 0 00-1.642-1.031h10.043zm-47.488 0h10.042c-.562.324-1.108.67-1.643 1.032-.102.069-.199.145-.3.215-.541.376-1.066.772-1.577 1.185a27.331 27.331 0 00-2.173 1.939l-.017.018a27.115 27.115 0 00-1.919 2.164 26.908 26.908 0 00-1.19 1.593c-.066.096-.138.188-.203.285-.358.533-.7 1.077-1.021 1.636V8.256zm0 47.488V45.676c.321.56.664 1.105 1.022 1.638.064.096.135.186.2.281a27.14 27.14 0 001.581 2.072c.494.587 1.002 1.16 1.543 1.702l.002.002a27.154 27.154 0 002.173 1.94c.512.414 1.037.81 1.579 1.187.101.07.197.146.299.215.535.361 1.081.707 1.642 1.031H8.367zm13.502.062A25.834 25.834 0 018.306 42.2 25.768 25.768 0 016.222 32c0-3.538.701-6.969 2.084-10.199A25.836 25.836 0 0121.869 8.194a25.696 25.696 0 0110.242-2.111c3.553 0 6.998.71 10.242 2.111A25.838 25.838 0 0155.916 21.8 25.769 25.769 0 0158.001 32c0 3.536-.701 6.968-2.085 10.199a25.828 25.828 0 01-13.563 13.606 25.693 25.693 0 01-10.242 2.111 25.679 25.679 0 01-10.242-2.11zm33.986-.062H45.813c.562-.324 1.108-.67 1.642-1.031.103-.069.2-.146.302-.216a27.52 27.52 0 001.571-1.181c.163-.132.325-.263.484-.398a27.704 27.704 0 001.69-1.541l.035-.038a26.998 26.998 0 001.907-2.152c.412-.513.807-1.04 1.182-1.583.068-.098.141-.192.208-.292.357-.532.699-1.076 1.02-1.635v10.067z"/><path d="M33.446 23.135c-.89 0-1.612.722-1.612 1.612v8.049l-4.079 4.078a1.611 1.611 0 102.28 2.28l4.551-4.55c.302-.302.472-.712.472-1.14v-8.716a1.61 1.61 0 00-1.612-1.613zm-1.335-6.467c-8.509 0-15.431 6.92-15.431 15.427 0 8.506 6.922 15.426 15.431 15.426s15.431-6.92 15.431-15.426c0-8.507-6.922-15.427-15.431-15.427zM19.179 38.606a14.322 14.322 0 01-1.545-6.511c0-7.981 6.495-14.473 14.477-14.473v2.097c-6.826 0-12.379 5.552-12.379 12.376 0 1.959.444 3.831 1.32 5.566l-1.873.945zm12.932 4.91c-6.3 0-11.426-5.124-11.426-11.422 0-6.298 5.126-11.422 11.426-11.422s11.426 5.124 11.426 11.422c0 6.298-5.126 11.422-11.426 11.422z"/></g></svg>
								<div>
									<p>{this.state.haste_value}%</p>
									<p>{this.state.haste_rating}</p>
								</div>
							</div>
							<div className="mastery">
								<h3>Mastery</h3>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g xmlns="http://www.w3.org/2000/svg" id="mastery"><path d="M57.355 42.637A27.245 27.245 0 0059.501 32c0-3.685-.724-7.262-2.146-10.637V6.756H42.794a27.168 27.168 0 00-10.683-2.172c-3.702 0-7.295.733-10.683 2.172H6.867v14.606A27.256 27.256 0 004.722 32c0 3.687.724 7.264 2.145 10.637v14.607h14.561a27.19 27.19 0 0010.683 2.173c3.701 0 7.294-.734 10.683-2.173h14.561V42.637zm-1.5-34.381v10.068a27.462 27.462 0 00-1.021-1.636c-.065-.098-.138-.19-.204-.286a27.278 27.278 0 00-1.188-1.591c-.13-.161-.26-.322-.393-.481a27.235 27.235 0 00-1.545-1.704 27.292 27.292 0 00-2.174-1.94 27.119 27.119 0 00-1.573-1.182c-.102-.071-.2-.147-.303-.217a27.755 27.755 0 00-1.642-1.031h10.043zm-47.488 0h10.042c-.562.324-1.108.67-1.643 1.032-.102.069-.199.145-.3.215-.541.376-1.066.772-1.577 1.185a27.331 27.331 0 00-2.173 1.939l-.017.018a27.115 27.115 0 00-1.919 2.164 26.908 26.908 0 00-1.19 1.593c-.066.096-.138.188-.203.285-.358.533-.7 1.077-1.021 1.636V8.256zm0 47.488V45.676c.321.56.664 1.105 1.022 1.638.064.096.135.186.2.281a27.14 27.14 0 001.581 2.072c.494.587 1.002 1.16 1.543 1.702l.002.002a27.154 27.154 0 002.173 1.94c.512.414 1.037.81 1.579 1.187.101.07.197.146.299.215.535.361 1.081.707 1.642 1.031H8.367zm13.502.062A25.834 25.834 0 018.306 42.2 25.768 25.768 0 016.222 32c0-3.538.701-6.969 2.084-10.199A25.836 25.836 0 0121.869 8.194a25.696 25.696 0 0110.242-2.111c3.553 0 6.998.71 10.242 2.111A25.838 25.838 0 0155.916 21.8 25.769 25.769 0 0158.001 32c0 3.536-.701 6.968-2.085 10.199a25.828 25.828 0 01-13.563 13.606 25.693 25.693 0 01-10.242 2.111 25.679 25.679 0 01-10.242-2.11zm33.986-.062H45.813c.562-.324 1.108-.67 1.642-1.031.103-.069.2-.146.302-.216a27.52 27.52 0 001.571-1.181c.163-.132.325-.263.484-.398a27.704 27.704 0 001.69-1.541l.035-.038a26.998 26.998 0 001.907-2.152c.412-.513.807-1.04 1.182-1.583.068-.098.141-.192.208-.292.357-.532.699-1.076 1.02-1.635v10.067z"/><path d="M46.934 26.287c-1.107 0-2.004.885-2.004 1.976 0 .31.079.599.208.861l-6.74 4.691-.387-8.422c1.064-.048 1.914-.906 1.914-1.967 0-1.091-.898-1.976-2.005-1.976-1.107 0-2.004.885-2.004 1.976 0 .732.408 1.364 1.008 1.705l-4.812 8.237-4.812-8.237a1.962 1.962 0 001.008-1.705c0-1.091-.897-1.976-2.004-1.976s-2.004.885-2.004 1.976c0 1.061.85 1.919 1.914 1.967l-.387 8.422-6.74-4.691c.129-.261.208-.551.208-.861 0-1.092-.897-1.976-2.005-1.976-1.107 0-2.004.885-2.004 1.976s.897 1.976 2.004 1.976c.298 0 .578-.068.832-.183l5.048 13.236c2.178-.849 5.377-1.385 8.943-1.385s6.764.536 8.942 1.385l5.048-13.236c.254.115.534.183.832.183 1.107 0 2.005-.885 2.005-1.976-.001-1.091-.899-1.976-2.006-1.976z"/></g></svg>
								<div>
									<p>{this.state.mastery_value}%</p>
									<p>{this.state.mastery_rating}</p>
								</div>
							</div>
							<div className="versatility">
								<h3>Versatility</h3>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g xmlns="http://www.w3.org/2000/svg" id="versatility"><path d="M57.355 42.637A27.245 27.245 0 0059.501 32c0-3.685-.724-7.262-2.146-10.637V6.756H42.794a27.168 27.168 0 00-10.683-2.172c-3.702 0-7.295.733-10.683 2.172H6.867v14.606A27.256 27.256 0 004.722 32c0 3.687.724 7.264 2.145 10.637v14.607h14.561a27.19 27.19 0 0010.683 2.173c3.701 0 7.294-.734 10.683-2.173h14.561V42.637zm-1.5-34.381v10.068a27.462 27.462 0 00-1.021-1.636c-.065-.098-.138-.19-.204-.286a27.278 27.278 0 00-1.188-1.591c-.13-.161-.26-.322-.393-.481a27.235 27.235 0 00-1.545-1.704 27.292 27.292 0 00-2.174-1.94 27.119 27.119 0 00-1.573-1.182c-.102-.071-.2-.147-.303-.217a27.755 27.755 0 00-1.642-1.031h10.043zm-47.488 0h10.042c-.562.324-1.108.67-1.643 1.032-.102.069-.199.145-.3.215-.541.376-1.066.772-1.577 1.185a27.331 27.331 0 00-2.173 1.939l-.017.018a27.115 27.115 0 00-1.919 2.164 26.908 26.908 0 00-1.19 1.593c-.066.096-.138.188-.203.285-.358.533-.7 1.077-1.021 1.636V8.256zm0 47.488V45.676c.321.56.664 1.105 1.022 1.638.064.096.135.186.2.281a27.14 27.14 0 001.581 2.072c.494.587 1.002 1.16 1.543 1.702l.002.002a27.154 27.154 0 002.173 1.94c.512.414 1.037.81 1.579 1.187.101.07.197.146.299.215.535.361 1.081.707 1.642 1.031H8.367zm13.502.062A25.834 25.834 0 018.306 42.2 25.768 25.768 0 016.222 32c0-3.538.701-6.969 2.084-10.199A25.836 25.836 0 0121.869 8.194a25.696 25.696 0 0110.242-2.111c3.553 0 6.998.71 10.242 2.111A25.838 25.838 0 0155.916 21.8 25.769 25.769 0 0158.001 32c0 3.536-.701 6.968-2.085 10.199a25.828 25.828 0 01-13.563 13.606 25.693 25.693 0 01-10.242 2.111 25.679 25.679 0 01-10.242-2.11zm33.986-.062H45.813c.562-.324 1.108-.67 1.642-1.031.103-.069.2-.146.302-.216a27.52 27.52 0 001.571-1.181c.163-.132.325-.263.484-.398a27.704 27.704 0 001.69-1.541l.035-.038a26.998 26.998 0 001.907-2.152c.412-.513.807-1.04 1.182-1.583.068-.098.141-.192.208-.292.357-.532.699-1.076 1.02-1.635v10.067z"/><path d="M40.128 30.517l3.792 1.018 4.647-4.652-.674-2.517-3.432 3.436-3.833-1.028-1.027-3.839 3.431-3.436-2.513-.674-4.646 4.652 1.016 3.798-2.898 2.902-6.569-6.577 1.893-1.895 4.978-2.562-7.639-.103-1.893 1.895-.721-.722-2.975 2.979.721.722-2.118 2.121-1.758.496-2.254 2.257 3.957 3.961 2.253-2.256.496-1.76-.033-.033 2.119-2.121 6.568 6.576-2.786 2.79-3.793-1.018-4.646 4.652.674 2.517 3.431-3.436 3.834 1.029 1.027 3.838-3.432 3.436 2.513.674 4.647-4.652-1.017-3.798 2.786-2.789 8.621 8.632 2.975-2.979-8.621-8.632z"/></g></svg>
								<div>
									<p>{this.state.versatility_value}%</p>
									<p>{this.state.versatility_rating}</p>
								</div>
							</div>
						</div>
						<div className="stats_ratio">
							<div className="stats_ratio_title">
								<h4>Ratio to sum of all secondary stats</h4>
							</div>
							<div className="stats_ratio_container">
								<div className="crit">
									<div className="stats_ratio_container_progress" style={{width: this.state.crit_ratio_units}}></div>
									<div className="stats_ratio_container_percents">Crit: {this.state.crit_ratio_units}</div>
								</div>
								<div className="haste">
									<div className="stats_ratio_container_progress" style={{width: this.state.haste_ratio_units}}></div>
									<div className="stats_ratio_container_percents">Haste: {this.state.haste_ratio_units}</div>
								</div>
								<div className="mastery">
									<div className="stats_ratio_container_progress" style={{width: this.state.mastery_ratio_units}}></div>
									<div className="stats_ratio_container_percents">Mastery: {this.state.mastery_ratio_units}</div>
								</div>
								<div className="versatility">
									<div className="stats_ratio_container_progress" style={{width: this.state.versatility_ratio_units}}></div>
									<div className="stats_ratio_container_percents">Versatility: {this.state.versatility_ratio_units}</div>
								</div>
							</div>
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