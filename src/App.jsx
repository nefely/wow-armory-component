import React, {Component} from 'react';

import "./style/style.css";
import "./style/style-custom.css";

import store from './store/store.jsx';

import Rosters from "./components/rosters/rosters.jsx";
import Armory from "./components/armory/armory.jsx";
import Myphics_Plus_Progress from "./components/myphics_plus_progress/myphics_plus_progress.jsx";

export default class App extends Component {
    render() {
      try{
        return (
          <div className="app">
            <div className="workspace_container">
              <Armory />
              <Myphics_Plus_Progress />
            </div>
            <Rosters />
          </div>
        );
      } catch (error) {
        return (
          <div className="app" />
        );
      }
    }
}
