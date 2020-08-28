import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Exercise() {
	const [exerc, setexerc] = useState([]);

	useEffect(() => {
		Axios.get('http://localhost:5000/exercise-list')
			.then((res) => setexerc(res.data))
			.catch((err) => console.error(err));
	}, [exerc]);

	const handleDelete = (id, e) => {
		Axios.delete(`http://localhost:5000/exercise-list/${id}`)
			.then((res) => console.log(res))
			.catch((err) => console.error(err));
	};

	return (
		<div className="hy">
			<div className="container">
				<table className=" center-align centered striped">
					<thead>
						<tr>
							<th>User Name</th>
							<th>Description</th>
							<th>Duration</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						{exerc.map((item) => (
							<tr key={item._id}>
								<td>{item.username}</td>
								<td>{item.description}</td>
								<td>{item.duration}</td>
								<td>
									<button className="btn" onClick={(e)=>handleDelete(item._id,e)} >delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
