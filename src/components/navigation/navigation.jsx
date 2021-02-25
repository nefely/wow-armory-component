import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy';

import "./navigation.css";

export default class Navigation extends Component {
    render() {
        return (
            <div id="navigation">
                <Scrollspy 
                items={['armory', 'rio', 'covenant', 'stats', 'talents', 'myphics_plus_progress', 'raids_progress']} 
                currentClassName="is-current"
                scrollDuration="1000"
                headerBackground="true"
                >
                    <li><a href="#armory">armory</a></li>
                    <li><a href="#rio">rio</a></li>
                    <li><a href="#covenant">covenant</a></li>
                    <li><a href="#stats">stats</a></li>
                    <li><a href="#talents">talents</a></li>
                    <li><a href="#myphics_plus_progress">dungeons</a></li>
                    <li><a href="#raids_progress">raids</a></li>
                </Scrollspy>
            </div>
        )
    }
}