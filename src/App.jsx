import React, {Component} from 'react';
import axios from 'axios';
import store from './store/store.jsx';

import Rosters from "./components/rosters/rosters.jsx";
import Armory from "./components/armory/armory.jsx";
import Stats from "./components/stats/stats.jsx";
import Myphics_Plus_Progress from "./components/myphics_plus_progress/myphics_plus_progress.jsx";
import Raids_Progress from "./components/raids_progress/raids_progress.jsx";
import Logout from "./components/logout/logout.jsx";

// import {logOut} from "./store/store.jsx";

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
      }
    }

    UNSAFE_componentWillMount() {
      try {
        axios.get("https://"+store.userData.region+".api.blizzard.com/profile/wow/character/"+store.userData.realmSlug+"/"+store.userData.characterName+"?namespace="+store.userData.nameSpace+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
            .then(result => {
              try {
                store.userData.nameSlug = ""
                store.userData.nameSlug = result.data.guild.name.toLowerCase().replace(/ /g, '-').replace(/'/g, '')
              } catch (error) {}
              this.setState({
                isLoaded: true,
              });
            }
          );
      } catch (error) {}
    }

    render() {
      if ( this.state.isLoaded === true ){
        try {
          return (
            <div className="app">
              <div className="workspace_container">
                <Armory />
                <Stats /> 
                <Myphics_Plus_Progress />
                <Raids_Progress />
              </div>
              <Rosters />
              <Logout />  
            </div>
          );
        } catch (error) {
          return (
            // <div className="app">
            //   <div className="workspace_container">
            //     <div className="error_app">
            //       <h2>Wrong Realm Or Character Name</h2>
            //       <button onClick={logOut}>
            //         <i className="fas fa-undo"></i>
            //       </button>
            //     </div>
            //   </div>
            // </div>
            <div className="xs-hide" />
          );
        }
      } else {
        return (
          // <div className="app">
          //   <div className="workspace_container">
          //     <div className="error_app">
          //       <h2>Wrong Realm Or Character Name</h2>
          //       <button onClick={logOut}>
          //         <i className="fas fa-undo"></i>
          //       </button>
          //     </div>
          //   </div>
          // </div>
          <div className="xs-hide" />
        );
      }
    }
}
