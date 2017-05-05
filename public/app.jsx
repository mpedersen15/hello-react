var Greeter = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Hello React!</h1>
				<p>It's a whole new world!</p>
			</div>
		);
	}
});

ReactDOM.render(
	<Greeter/>,
	document.getElementById('app')
);