import React, {Component} from 'react';

import "./style/style.css";
import "./style/style-custom.css";

import store from './store/store.jsx';

import Rosters from "./components/rosters/rosters.jsx";
import Armory from "./components/armory/armory.jsx";

export default class App extends Component {
    render() {
        return (
          <div className="app">
            <div className="workspace_container">
              <Armory />
            </div>
            <Rosters />
          </div>
        );
    }
}
