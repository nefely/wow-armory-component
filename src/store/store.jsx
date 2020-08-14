import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';

var store = {
	userData: {
		region: "eu",
		realmSlug: "Soulflayer".toLowerCase(),
		realmID: "1604",
		nameSlug: "искра-безумия",
		characterName: "анука".toLowerCase(),
		characterID: "193910968",
		nameSpace: "profile-eu",
		locale: "en_GB",
		accessToken: "USVcsIdswWWcx1Ma6UCKLnmD6S1hdZhUZO",
	}
}
export default window.store = store;

export const newCharacterRender = (e) => {
	store.userData.characterName = e.target.innerHTML.toLowerCase();
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<App/>,document.getElementById('root'))
}
