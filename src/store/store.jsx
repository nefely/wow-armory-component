import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import Login from '../components/login/login.jsx';

var store = {
	userData: {
		region: "eu",
		locale: "en_GB",
		realmSlug: "soulflayer".toLowerCase().replace(/ /g, '-').replace(/'/g, ''),
		characterName: "анука".toLowerCase(),
	},
	gameData: {
		seasonNumber: 4,
		expansionsName: "Battle for Azeroth",
	},
	accessData: {
		clientID: "c03a0521a7b54bf29e501101b4b69007",
		clientSecret: "bpjGN3KqGWmbibk4Fn74CDsFP2YQOdqo",
	},
	appData: {
		isLogged: true,
	},
}
export default window.store = store;

export const newCharacterRender = (e) => {
	store.userData.characterName = e.target.innerHTML.toLowerCase();
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<App/>,document.getElementById('root'))
}

export const logOut = () => {
	store.userData.realmSlug = "";
	store.userData.characterName = "";
	store.appData.isLogged = false;
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<Login/>,document.getElementById('root'))
}
export const logIn = () => {
	store.userData.realmSlug = document.getElementsByTagName("input")[0].value.toLowerCase().replace(/ /g, '-').replace(/'/g, '');
	store.userData.characterName = document.getElementsByTagName("input")[1].value.toLowerCase();
	store.appData.isLogged = true;
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<App/>,document.getElementById('root'))
}
export const Demo = () => {
	store.userData.realmSlug = "soulflayer";
	store.userData.characterName = "анука";
	store.appData.isLogged = true;
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<App/>,document.getElementById('root'))
}
