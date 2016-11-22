import React from 'react';

// Add new user form
//=======================================
class AddUserForm extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		var _this = this;

		var formData = {
			userName : this.refs.userName.value,
			password: this.refs.password.value
		}
		console.log(this.props.newUser);
		$.ajax({
			url: "/home",
			type: 'POST',
			dataType: 'json',
			data: {userName:formData.userName, password:formData.password}
		}).done(function( data ) {
			console.log("User Added : ", data);
      		/*_this.setState({
        		users: _this.state.users.concat([data.users])
      		})*/
			//_this.addNewUser(data);
			const user = _this.state.users;
			user.push(data.user);
			console.log("test :: ", user);
			_this.setState({ users: user });
			//_this.props.newUser(data.user);
			_this.refs.formAddUser.reset();
		}).fail(function( xhr, status, errorThrown ) {
			alert( "Sorry, there was a problem!" );
			console.log( "Error: " + errorThrown );
			console.log( "Status: " + status );
			console.dir( xhr );
		});
	}

	render() {
		return (
			<form ref="formAddUser" onSubmit={this.handleSubmit.bind(this)}>
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
		)
	}
}

class MainBody extends React.Component {
	constructor() {
		super();
		this.state = {
			users : []
		}
		this.getUsers();
	}

	getUsers() {
		var _this = this;

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
	addNewUser(data) {
		this.setState({
			users: data.users
		});
	}
	render() {
		return (
			<div className="content" role="main">
				<AddUserForm newUser={this.addNewUser} />

        		<ul>
        			{this.state.users.map(function(user, index) {
          			return (<li key={user._id}><b>{index}</b> : {user.userName}</li>);
        			})}
        		</ul>
			</div>
		)
	}
}

export default MainBody;
