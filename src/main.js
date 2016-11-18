import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MainBody from './Content.jsx';

// Main App Code
var App = React.createClass({
	getInitialState : function() {
		return {
			users : []
		}
	},
	componentDidMount : function() {
		var _this = this;

		$.ajax({
			url: "./js/users-data.json",
			type: 'GET',
			dataType: 'json'
		}).done(function( json ) {
			console.log("AJAX Data : ", json);

			_this.setState({
				users: json.users
			});

		}).fail(function( xhr, status, errorThrown ) {
			alert( "Sorry, there was a problem!" );
			console.log( "Error: " + errorThrown );
			console.log( "Status: " + status );
			console.dir( xhr );
		});

	},
	handleClick : function() {
		this.setState({
			name : "Manoj"
		});
	},
	render: function(){
		return (
			<section>
				<Header />
				<MainBody />
				<Footer year="2016"/>
			</section>
		)
	}
});

ReactDOM.render(<App message="Hi React" />, document.querySelector('#app'));
