import React,{useState,useEffect} from 'react';
import Axios from 'axios';

const Home = () => {
	const [users, setusers] = useState([]);

  useEffect(() => {
		Axios.get('http://localhost:5000/users')
			.then((res) => setusers(res.data))
			.catch((err) => console.error(err));
  }, [users]);

const handleDelete = (id, e) => {
	Axios.delete(`http://localhost:5000/users/${id}`)
		.then((res) => console.log(res))
		.catch((err) => console.error(err));
};

  return (
		<div className="container center-align">
			<table className=" center-align centered striped">
				<thead>
					<tr>
						<th>Users</th>
					
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					{users.map((item) => (
						<tr key={item._id}>
							<td>{item.user}</td>
							
							<td>
								<button className="btn" onClick={(e) => handleDelete(item._id, e)}>
									delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
  );
}

export default Home;
