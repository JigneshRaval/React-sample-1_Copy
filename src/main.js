import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MainBody from './Content.jsx';

// Main App Code
var App = React.createClass({
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
