import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';

var store = {
	userData: {
		region: "eu",
		locale: "en_GB",
		nameSpace: "profile-eu",
		nameSlug: "искра-безумия",
		realmSlug: "Soulflayer".toLowerCase(),
		characterName: "анука".toLowerCase(),
		accessToken: "USsZ4Bz0FW8mB8u1AHejnAjOvadw8Ic3Gj",
		season: 4
		/*characterID: "193910968",*/
		/*realmID: "1604",*/
	}
}
export default window.store = store;

export const newCharacterRender = (e) => {
	store.userData.characterName = e.target.innerHTML.toLowerCase();
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	ReactDOM.render(<App/>,document.getElementById('root'))
}
