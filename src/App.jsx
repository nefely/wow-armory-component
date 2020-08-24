import React, {Component} from 'react';
import axios from 'axios';
import store from './store/store.jsx';

import "./style/style.css";
import "./style/style-custom.css";

import Rosters from "./components/rosters/rosters.jsx";
import Armory from "./components/armory/armory.jsx";
import Myphics_Plus_Progress from "./components/myphics_plus_progress/myphics_plus_progress.jsx";
import Raids_Progress from "./components/raids_progress/raids_progress.jsx";

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false
      }
    }

    UNSAFE_componentWillMount() {
      
      store.userData.nameSpace = "profile-" + store.userData.region;
      store.userData.nameSpaceStatic = "static-" + store.userData.region;
      store.userData.nameSpaceDynamic = "dynamic-" + store.userData.region;

      try {
        axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
            .then(result => {
              store.userData.nameSlug = result.data.guild.name.toLowerCase().replace(/ /g, '-')
              this.setState({
                isLoaded: true
              });
            }
          );
      } catch (error) {}
    }

    render() {
      if ( this.state.isLoaded === true ){
        try{
          return (
            <div className="app">
              <div className="workspace_container">
                <Armory />
                <Myphics_Plus_Progress />
                <Raids_Progress />
              </div>
              <Rosters />
            </div>
          );
        } catch (error) {
          return (
            <div className="app" />
          );
        }
      } else {
        return (
          <div className="app" />
        );
      }
    }
}
