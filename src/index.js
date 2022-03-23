import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import store from './store/store.jsx';
import * as serviceWorker from './serviceWorker';

import App from "./App.jsx";
import Login from "./components/login/login.jsx";

import "./style/style.css";
import "./style/style-custom.css";

function windowResize(){
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
windowResize();
window.addEventListener("resize", windowResize);

//get string data
store.userData.nameSpace = "profile-" + store.userData.region;
store.userData.nameSpaceStatic = "static-" + store.userData.region;
store.userData.nameSpaceDynamic = "dynamic-" + store.userData.region;

//get access token data
axios.post("https://us.battle.net/oauth/token?grant_type=client_credentials&client_id="+store.accessData.clientID+"&client_secret="+store.accessData.clientSecret, {})
.then(result => {
	function getURLParameter(sUrl, sParam) {
		let sPageURL = decodeURI(sUrl.substring(sUrl.indexOf('?') + 1));
		let sURLVariables = sPageURL.split('&');
		for (let i = 0; i < sURLVariables.length; i++) {
			let sParameterName = sURLVariables[i].split('=');
			if (sParameterName[0] == sParam) {
				return sParameterName[1];
			}
		}
	}
	if (getURLParameter(window.location.href, 'region') !== null && getURLParameter(window.location.href, 'region') !== undefined && getURLParameter(window.location.href, 'region') !== "") {
		if (getURLParameter(window.location.href, 'realmSlug') !== null && getURLParameter(window.location.href, 'realmSlug') !== undefined && getURLParameter(window.location.href, 'realmSlug') !== "") {
			if (getURLParameter(window.location.href, 'characterName') !== null && getURLParameter(window.location.href, 'characterName') !== undefined && getURLParameter(window.location.href, 'characterName') !== "") {
				store.userData.region = getURLParameter(window.location.href, 'region').toLowerCase();
				store.userData.realmSlug = getURLParameter(window.location.href, 'realmSlug').toLowerCase().replace(/ /g, '-').replace(/'/g, '');
				store.userData.characterName = getURLParameter(window.location.href, 'characterName').toLowerCase();
				store.userData.nameSpace = "profile-" + store.userData.region;
				store.userData.nameSpaceStatic = "static-" + store.userData.region;
				store.userData.nameSpaceDynamic = "dynamic-" + store.userData.region;
				store.appData.isLogged = true;
				window.history.pushState(null, '', '/');
			} else {
				store.appData.isLogged = false;
			}
		} else {
			store.appData.isLogged = false;
		}
	} else {
		store.appData.isLogged = false;
	}

	store.userData.accessToken = result.data.access_token;
	if (store.appData.isLogged === true) {
		ReactDOM.render(<App/>,document.getElementById('root'));
	} else {
		ReactDOM.render(<Login/>,document.getElementById('root'));
	}
	serviceWorker.register();
});

// OLD
//get access token data
// axios.get("https://us.battle.net/oauth/token", {
// 	params: {
// 		client_id: store.accessData.clientID,
// 		client_secret: store.accessData.clientSecret,
// 		grant_type: "client_credentials",
// 	}
// }).then(result => {
// 	store.userData.accessToken = result.data.access_token;
// 	if (store.appData.isLogged === true) {
// 		ReactDOM.render(<App/>,document.getElementById('root'));
// 	} else {
// 		ReactDOM.render(<Login/>,document.getElementById('root'));
// 	}
// 	serviceWorker.register();
// });

// MANUAL
// store.userData.accessToken = "USJlqtOvRQ56YZ7S8I6TNzngfbCwsa92Oy";
// if (store.appData.isLogged === true) {
// 	ReactDOM.render(<App/>,document.getElementById('root'));
// } else {
// 	ReactDOM.render(<Login/>,document.getElementById('root'));
// }
// serviceWorker.register();