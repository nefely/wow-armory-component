import React, {Component} from 'react';

import {logOut} from "../../store/store.jsx";

import "./logout.css";

export default class Logout extends Component {
    render() {
        try {
            return (
                <div id="logout">
                    <button onClick={logOut}>
                        <i className="fas fa-sign-out-alt" />
                    </button>
                </div>
            )
        } catch (error) {
            return (
                <div className="xs-hide" />
            )
        }
    }
}
