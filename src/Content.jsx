import React from 'react';

class Saves extends React.Component {
  	constructor() {
		super();
		this.state = {
			saved: false,
			numSaves: 0
		}
		//this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		var saved = false;
		var numSaves = this.state.numSaves;

		if (this.state.saved === false) {
		  saved = true;
		  numSaves++;
		} else {
		  numSaves--;
		}
		this.setState({
		  numSaves: numSaves,
		  saved: saved
		});
	}

  	render() {
	    var savedText = '';
	    var submitText = 'Save';
	    if (this.state.saved) {
	      	savedText = 'You have saved this home.';
	      	submitText = 'Remove';
	    }

	    return (
	      	<div className="saves">
	        	<form onSubmit={this.handleSubmit.bind(this)}>
	          		<input type="submit" value={submitText} />
	        	</form>
	      		{this.state.numSaves} saves. {savedText}
	      	</div>
	    );
  	}
}

class MainBody extends React.Component {
	render() {
		return (
			<div className="content" role="main">
				<div>

					<ul className="nav nav-tabs" role="tablist">
						<li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
						<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Flexi Declaration</a></li>
						<li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Flexi Reimbursment</a></li>
						<li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">My Flexi Report</a></li>
					</ul>

					<div className="tab-content">
						<div role="tabpanel" className="tab-pane active" id="home">Home</div>
						<div role="tabpanel" className="tab-pane" id="profile">Profile</div>
						<div role="tabpanel" className="tab-pane" id="messages">Messages Tab content</div>
						<div role="tabpanel" className="tab-pane" id="settings">...</div>
					</div>

				</div>
			</div>
		)
	}
}
export default MainBody;
