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

			//_this.addNewUser(data);
			//const user = _this.state.users;
			//user.push(data.user);
			//console.log("test :: ", user);
			_this.props.newUser(data.user);
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
			<div className="c-user-form">
				<h3>Add New User</h3>
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
			</div>
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
		const users = this.state.users;
		users.push(data);
		console.log("PPP :: ", users);
		this.setState({
			users: users
		});
	}

	deleteUser(id) {
		console.log("Delete user :", id, this);
		var _this = this;

		$.ajax({
		  	url: "/users/"+id,
		  	type: 'GET',
		  	dataType: 'json'
		}).done(function( data ) {
		  	console.log("Delete User : ", data);
			_this.getUsers();

		}).fail(function( xhr, status, errorThrown ) {
			alert( "Sorry, there was a problem!" );
			console.log( "Error: " + errorThrown );
			console.log( "Status: " + status );
			console.dir( xhr );
		});
	}

	render() {
		var _this = this;
		return (
			<div className="content" role="main">
				<AddUserForm newUser={this.addNewUser.bind(this)} />

        		<ul className="c-user-list">
        			{this.state.users.map(function(user, index) {
          			return (<li key={user._id} data-id={user._id}><b>{index}</b> : {user.userName} <a href="javascript:;" onClick={_this.deleteUser.bind(_this, user._id)}>Delete</a></li>);
        			})}
        		</ul>
			</div>
		)
	}
}

export default MainBody;
