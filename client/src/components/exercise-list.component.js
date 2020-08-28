import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom"

export default function Log() {
	const [username, setusername] = useState('');
	const [description, setdescription] = useState('');
	const [duration, setDuration] = useState(0);
  let history =useHistory();
	 const handleSubmit = () => {
    axios
		.post('http://localhost:5000/exercise-list', { username, description, duration })
		.then((res) => history.push('/exercise'))
		.catch((err) => console.error(err));
	};

	return (
		<div className="row container center-align">
			<h3 className="center-align #d500f9 purple-text text-accent-3">CREATE EXERCISE</h3>
			<form className="col s12">
				<div className="input-field col s12">
					<label for="user_name">User Name</label>
					<input
						id="user_name"
						type="text"
						className="validate"
						onChange={(e) => setusername(e.target.value)}
					/>
				</div>

				<div className="input-field col s12">
					<input
						id="describe"
						type="text"
						className="validate"
						onChange={(e) => setdescription(e.target.value)}
					/>
					<label for="describe">Description</label>
				</div>
				<div className="input-field col s12">
					<input
						id="number"
						type="number"
						className="validate"
						onChange={(e) => setDuration(parseInt(e.target.value))}
					/>
					<label for="number">Duration(in Minutes)</label>
				</div>
			</form>
      
			<button
				class="btn waves-effect waves-light #3d5afe indigo accent-3"
				type="button"
				name="action"
				onClick={handleSubmit}
			>
				Submit
			</button>
		</div>
	);
}
