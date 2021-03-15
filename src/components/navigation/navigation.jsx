import React, {Component} from 'react';

import "./navigation.css";

export default class Navigation extends Component {
    render() {
        return (
            <div id="navigation">
                <ul>
                    <li><a href="#armory">Armory</a></li>
                    <li><a href="#rio">Rio</a></li>
                    <li><a href="#covenant">Covenant</a></li>
                    <li><a href="#stats">Stats</a></li>
                    <li><a href="#talents">Talents</a></li>
                    <li><a href="#myphics_plus_progress">Dungeons</a></li>
                    <li><a href="#raids_progress">Raids</a></li>
                </ul>
            </div>
        )
    }
}