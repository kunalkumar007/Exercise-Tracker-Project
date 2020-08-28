import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function User() {
	const [user, setuser] = useState('');
	let history = useHistory();

	const handleSubmit = () => {
		console.log(user);
		axios
			.post('http://localhost:5000/user', { user })
			.then((result) => history.push('/'))
			.catch((err) => {
				if (err) throw err;
			});
	};

	return (
		<div className="container center-align ">
			<h2 className="#006064 cyan-text text-darken-4">Create User</h2>
			<form className="col s12 ">
				<div className="input-field col s6">
					<input
						id="user_name"
						type="text"
						className="validate"
						onChange={(e) => setuser(e.target.value)}
						value={user}
					/>
					<label for="user_name">User Name</label>
				</div>
				<button
					class="btn waves-effect waves-light #3d5afe indigo accent-3"
					type="button"
					onClick={handleSubmit}
				>
					Create User
				</button>
			</form>
		</div>
	);
}
