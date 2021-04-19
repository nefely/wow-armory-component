import React, {Component} from 'react';
import store from '../../store/store';

import "./copylink.css";

export default class Copy_Link extends Component {
    render() {
        var CopyLink = () => {
            var CopiedLInk = window.location.origin + "?region=" + store.userData.region + "&realmSlug=" + store.userData.realmSlug + "&characterName=" + store.userData.characterName;
            var FakeBuffer = document.createElement("input");
            document.body.appendChild(FakeBuffer);
            FakeBuffer.value = CopiedLInk;
            FakeBuffer.select();
            document.execCommand('copy');
            document.body.removeChild(FakeBuffer);
        }
        try {
            return (
                <div id="copylink" onClick={CopyLink}>
                    <button>
                        <i className="fas fa-link"></i>
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
