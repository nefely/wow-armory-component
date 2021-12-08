import React, {Component} from 'react';
import axios from 'axios';
import store from '../../store/store.jsx';
import SelectSearch from 'react-select-search';

import {logIn , Demo} from "../../store/store.jsx";

import "./login.css";

export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        defaultRegion: "EU",
        defaultRealm: "tarren-mill",
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
            const options_realm = realmsArray;
            const options_region = [
                {name: 'EU', value: 'EU'},
                // {name: 'KR', value: 'KR'},
                {name: 'US', value: 'US'},
            ];
            try {
                return(
                    <div id="login">
                        <div className="workspace_container">
                            <div className="login_form wrapper">
                                <h2>All your stats. In one place</h2>
                                <h4>Choose You Character</h4>
                                <form className="form">
                                    <SelectSearch 
                                        options={options_region} 
                                        name="regionmname" 
                                        placeholder="Region" 
                                        search={true} 
                                        value={this.state.defaultRegion}
                                        defaultValue={this.state.defaultRegion}
                                    />
                                    <SelectSearch 
                                        options={options_realm} 
                                        name="realmname" 
                                        placeholder="Realm" 
                                        search={true} 
                                        value={this.state.defaultRealm} 
                                        defaultValue={this.state.defaultRealm}
                                    />
                                    <input type="text" placeholder="Character"/>
                                    <button onClick={logIn}>Log In</button>

                                </form>
                            </div>
                            <div className="footer wrapper">
                                <div className="demo">
                                    <button onClick={Demo}>Demo</button>
                                </div>
                                <div className="rules">
                                    <a href="https://www.privacypolicygenerator.info/live.php?token=uQhPwN9HMfSrzboYHwEE1I3Zy4aM0gVf" target="__blank">Privacy Policy</a>
                                    <a href="https://www.termsofusegenerator.net/live.php?token=BVq5RS7Gyeh7Eg7k2OtNusBYNf1wxGzB" target="__blank">Terms Of Use</a>
                                    <a href="mailto:nefely123@gmail.com">Contact Us</a>
                                </div>
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
