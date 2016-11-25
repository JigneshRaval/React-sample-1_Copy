import React from 'react';

/*
const ProfileView = ({ params: { id } }) => {
  return (
    <div className="User">
      <h1>User id: {id}</h1>
    </div>
  )
}
*/

class ProfileView extends React.Component {
	constructor() {
		super();
	}

	viewUserDetail(id) {
		//var id = this.props.userid;
		console.log("User Detail for :", id, this);
		// url (required), options (optional)
		window.fetch("/users/"+id, {
			method: 'GET'
		}).then(function(response) {
			console.log("PPP :", response);
		}).catch(function(err) {
			// Error :(
			console.log("Error :", err);
		});
	}

	render() {
		console.log(this.props.params.id, data);
		this.viewUserDetail(this.props.params.id);
		return (
			<div className="c-user-profile">
				<img src="images/user-default.jpg" />
				<h3>User Name {this.props.params.id}</h3>
				<address>45, New Park Society</address>
			</div>
		)
	}
}
/*
const ProfileView = ({ params: { id } }) => (
	<div className="c-user-profile">
		<img src="images/user-default.jpg" />
		<h3>User Name {id}</h3>
		<address>45, New Park Society</address>
		<Test1 />
	</div>
)*/

export default ProfileView;
