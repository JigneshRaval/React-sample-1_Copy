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
	constructor() {
		super();
		this.state = {
			users : []
		}

	}

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    var _this = this;
    this.setState({
      users: []
    });
    $.ajax({
      url: "/users",
      type: 'GET',
      dataType: 'json'
    }).done(function( data ) {
      console.log("getUsers: ", data);

      _this.setState({
        users: data.users
      });

    }).fail(function( xhr, status, errorThrown ) {
      alert( "Sorry, there was a problem!" );
      console.log( "Error: " + errorThrown );
      console.log( "Status: " + status );
      console.dir( xhr );
    });
  }

	handleSubmit(e) {
		e.preventDefault();
		var _this = this;

		var formData = {
			userName : this.refs.userName.value,
			password: this.refs.password.value
		}
		$.ajax({
			url: "/home",
			type: 'POST',
			dataType: 'json',
			data: {userName:formData.userName, password:formData.password}
		}).done(function( data ) {
			console.log("AJAX Data 2: ", data);
      _this.setState({
        users: _this.state.users.concat([data.users])
      })
			//_this.state.users.push(data.users);

		}).fail(function( xhr, status, errorThrown ) {
			alert( "Sorry, there was a problem!" );
			console.log( "Error: " + errorThrown );
			console.log( "Status: " + status );
			console.dir( xhr );
		});
	}

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

				<form onSubmit={this.handleSubmit.bind(this)}>
				  <div className="form-group">
				    <label htmlFor="exampleInputEmail1">User Name</label>
				    <input type="userName" ref="userName" className="form-control" id="exampleInputEmail1" placeholder="User Name" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1">Password</label>
				    <input type="password" ref="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				  </div>
				  <button type="submit" className="btn btn-default">Submit</button>
				</form>
        <p>{this.state.users.userName}</p>
        <ul>
        {this.state.users.map(function(user, index) {
          return (<li key={user._id}>{index} {user.userName}</li>);
        })}
        </ul>
			</div>
		)
	}
}
export default MainBody;
