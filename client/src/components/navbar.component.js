import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Slider from "./slider.component";

export default class Navbar extends Component {
	render() {
		return (
			<div className="">
				<nav className="#aa00ff purple accent-4">
					<div className="nav-wrapper container">
						<NavLink to="/" className="brand-logo">
							ExerTracker
						</NavLink>
						<ul id="nav-mobile" className="right hide-on-med-and-down ">
							<li>
								<NavLink to="/exercise" className="waves-effect ">
									Exercises
								</NavLink>
							</li>

							<li>
								<NavLink to="/exercise-list" className="waves-effect ">
									Log
								</NavLink>
							</li>
							<li>
								<NavLink to="/user" className="waves-effect ">
									User
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
