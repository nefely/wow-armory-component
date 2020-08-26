import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import store from './store/store.jsx';
import * as serviceWorker from './serviceWorker';

import App from "./App.jsx";

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
axios.get("https://us.battle.net/oauth/token", {
	params: {
		client_id: store.accessData.clientID,
		client_secret: store.accessData.clientSecret,
		grant_type: "client_credentials",
	}
}).then(result => {
	store.userData.accessToken = result.data.access_token;
	ReactDOM.render(<App/>,document.getElementById('root'));
	serviceWorker.register();
});