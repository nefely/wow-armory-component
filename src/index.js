import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx";

function windowResize(){
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
windowResize();
window.addEventListener("resize", windowResize);

ReactDOM.render(<App/>,document.getElementById('root'));

