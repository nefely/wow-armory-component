import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';

var store = {
	userData: {
		region: "eu",
		locale: "en_GB",
		nameSpace: "profile-eu",
		nameSpaceStatic: "static-eu",
		nameSpaceDynamic: "dynamic-eu",
		realmSlug: "Soulflayer".toLowerCase(),
		characterName: "анука".toLowerCase(),
		accessToken: "USg9Mo1RXfYTvDb3h2Qi9uB9354wSDuZDq",
		season: 4
	}
}
export default window.store = store;

export const newCharacterRender = (e) => {
	store.userData.characterName = e.target.innerHTML.toLowerCase();
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<App/>,document.getElementById('root'))
}
