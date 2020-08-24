import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';

var store = {
	userData: {
		region: "eu",
		locale: "en_GB",
		realmSlug: "Soulflayer".toLowerCase(),
		characterName: "анука".toLowerCase(),
		accessToken: "USKRBX6bGioqjHTR62n73zd0reWHyIvaoq",
		/*hidden data*/
		/*clientID: "c03a0521a7b54bf29e501101b4b69007",
		ClientSecret: "bpjGN3KqGWmbibk4Fn74CDsFP2YQOdqo",*/
	},
	gameData: {
		seasonNumber: 4,
		expansionsName: "Battle for Azeroth",
	}
}
export default window.store = store;

export const newCharacterRender = (e) => {
	store.userData.characterName = e.target.innerHTML.toLowerCase();
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<App/>,document.getElementById('root'))
}
