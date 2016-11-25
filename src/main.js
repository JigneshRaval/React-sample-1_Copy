// SETUP REACT
//==========================================
import React, {component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

// IMPORT REACT MODULES
//==========================================
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MainBody from './Content.jsx';
import ProfileView from './profile-view.jsx';

// Main App Code
class App extends React.Component {
	render(){
		return (
			<div className="main-body" role="main">
				{/* HEADER SECTION */}
				<Header />

				{/* ROUTERS */}
				<div className="content" role="main">
					<Router history={browserHistory}>
						<Route path="/" component={MainBody} />
						<Route path="/users/:id" component={ProfileView} />
					</Router>
				</div>

				{/* FOOTER SECTION */}
				<Footer year="2016"/>
			</div>
		)
	}
};

ReactDOM.render(<App />, document.querySelector('#app'));
