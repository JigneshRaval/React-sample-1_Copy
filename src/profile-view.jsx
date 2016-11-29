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

	render() {
		console.log(this.props.params.id, data[0]);

		return (
			<div className="c-user-profile">
				<b>{this.props.datauser}</b>
				<img src="images/user-default.jpg" />
				<h3>User Name {this.props.params.id}, { data[0].userName },<br/> {data[0].password }</h3>
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
