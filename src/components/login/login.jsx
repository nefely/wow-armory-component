import React, {Component} from 'react';
import axios from 'axios';
import store from '../../store/store.jsx';
import SelectSearch from 'react-select-search';

import {logIn , CheckItOut} from "../../store/store.jsx";

import "./login.css";

export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false
      }
    }

    UNSAFE_componentWillMount() {
        try {
          axios.get("https://"+store.userData.region+".api.blizzard.com/data/wow/realm/index?namespace="+store.userData.nameSpaceDynamic+"&locale="+store.userData.locale+"&access_token="+store.userData.accessToken+"")
              .then(result => {
                this.setState({
                    realms: result.data.realms,
                    isLoaded: true,
                });
              }
            );
        } catch (error) {}
    }

    render() {
        if ( this.state.isLoaded === true ){
            var realmsArray = [];
            for (var i = 0 ; i < this.state.realms.length ; i++ ) {
                var realmObject = {
                    name: this.state.realms[i].name,
                    value: this.state.realms[i].slug, 
                }
                realmsArray.push(realmObject)
            }
            const options = realmsArray
            try {
                return(
                    <div id="login">
                        <div className="workspace_container">
                            <div className="wrapper">
                                <h2>Choose You Character</h2>
                                <div className="form">
                                    <SelectSearch options={options} name="realmname" placeholder="Realm Name" search={true} />
                                    <input type="text" placeholder="Character Name" />
                                    <button onClick={logIn}>Login</button>
                                </div>
                            </div>
                            <div className="wrapper check">
                                <button onClick={CheckItOut}>Check It Out</button>
                            </div>
                        </div>
                    </div>
                )
            } catch (error) {
                return (
                    <div className="xs-hide" />
                )
            }
        } else {
            return (
                <div className="xs-hide" />
            )
        }
        
    }
}
