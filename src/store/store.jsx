import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import Login from '../components/login/login.jsx';

var store = {
	userData: {
		region: "eu",
		locale: "eu_GB",
		realmSlug: "".toLowerCase().replace(/ /g, '-').replace(/'/g, ''),
		characterName: "".toLowerCase(),
	},
	gameData: {
		seasonNumber: 13,
		expansionsName: "Mythic+ Dungeons",
		expansionsRaidName: "The War Within",
	},
	accessData: {
		clientID: "c03a0521a7b54bf29e501101b4b69007",
		clientSecret: "ltjO2npEqLHNSNDv2Yjr3zGkG7W047vV",
	},
	appData: {
		isLogged: false,
	},
}
export default window.store = store;

export const newCharacterRender = (e) => {
	store.userData.characterName = e.target.getAttribute("data-character-name").toLowerCase();
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<App/>,document.getElementById('root'))
}
export const logOut = () => {
	// window.location.href = window.location.origin
	store.userData.region="eu";
	store.userData.nameSpace = "profile-eu";
	store.userData.nameSpaceStatic = "static-eu";
	store.userData.nameSpaceDynamic = "dynamic-eu";
	store.userData.realmSlug = "";
	store.userData.characterName = "";
	store.appData.isLogged = false;
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<Login/>,document.getElementById('root'))
}
export const logIn = () => {
	store.userData.region="";
	store.userData.nameSpace = "";
	store.userData.nameSpaceStatic = "";
	store.userData.nameSpaceDynamic = "";
	store.userData.region = document.getElementsByTagName("input")[0].value.toLowerCase();
	store.userData.nameSpace = "profile-" + store.userData.region;
	store.userData.nameSpaceStatic = "static-" + store.userData.region;
	store.userData.nameSpaceDynamic = "dynamic-" + store.userData.region;
	store.userData.realmSlug = document.getElementsByTagName("input")[1].value.toLowerCase().replace(/ /g, '-').replace(/'/g, '');
	store.userData.characterName = document.getElementsByTagName("input")[2].value.toLowerCase();
	store.appData.isLogged = true;
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<App/>,document.getElementById('root'))
}
export const Demo = () => {
	store.userData.region="eu";
	store.userData.nameSpace = "profile-eu";
	store.userData.nameSpaceStatic = "static-eu";
	store.userData.nameSpaceDynamic = "dynamic-eu";
	store.userData.realmSlug = "tarren-mill";
	store.userData.characterName = "nefelypriest";
	store.appData.isLogged = true;
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<App/>,document.getElementById('root'))
}
