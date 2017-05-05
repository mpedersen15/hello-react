var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = "Jen";
ReactDOM.render(
	<Greeter name={firstName} message="An alternative message"/>,
	document.getElementById('app')
);