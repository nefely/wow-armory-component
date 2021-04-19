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
            var copyLinkPopupText = document.createElement('p');
            copyLinkPopupText.textContent = "link copied to clipboard";
            document.getElementById("copylink").appendChild(copyLinkPopupText);
            document.execCommand('copy');
            setTimeout(function(){
                copyLinkPopupText.classList.add("active");
            }, 0)
            setTimeout(function(){
                copyLinkPopupText.classList.remove("active");
            }, 2400)
            document.getElementById("copylink_button").classList.add("active");
            setTimeout(function(){
                document.getElementById("copylink").removeChild(copyLinkPopupText);
                document.getElementById("copylink_button").classList.remove("active");
            }, 2700)
        }
        try {
            return (
                <div id="copylink" onClick={CopyLink}>
                    <button id="copylink_button">
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
