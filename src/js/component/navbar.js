import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starwarsImage from "../../img/starwars.png";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const style = {
		float: "left",
		display: "flex"
	};
	return (
		<div className="container-fluid p-0">
			<nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand">
							<img src={starwarsImage} />
						</span>
					</Link>
					<div className="ml-auto">
						{store.userLoggedIn ? (
							<div className="btn-group">
								<button
									type="button"
									className="btn btn-primary dropdown-toggle"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									Favorites <span className="badge badge-light">{store.favorites.length}</span>
								</button>
								<ul className="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
									{store.favorites ? (
										store.favorites.map((item, index) => {
											return (
												<li key={`${index}`}>
													{item.type === "C" ? (
														<div style={style}>
															<span className="dropdown-item">
																<Link
																	to={
																		"/cdetails/" +
																		actions.findIndexInCharacters(item.name)
																	}>
																	{item.name}
																</Link>
															</span>
															<span
																className="dropdown-item"
																onClick={() => actions.delToFavorites(item.name)}>
																<i
																	className="fa fa-trash float-right"
																	aria-hidden="true"
																/>
															</span>
														</div>
													) : item.type === "P" ? (
														<div style={style}>
															<span className="dropdown-item">
																<Link
																	to={
																		"/pdetails/" +
																		actions.findIndexInPlanets(item.name)
																	}>
																	{item.name}
																</Link>
															</span>
															<span
																className="dropdown-item"
																onClick={() => actions.delToFavorites(item.name)}>
																<i
																	className="fa fa-trash float-right"
																	aria-hidden="true"
																/>
															</span>
														</div>
													) : (
														<div style={style}>
															<span className="dropdown-item">
																<Link
																	to={
																		"/vdetails/" +
																		actions.findIndexInVehicles(item.name)
																	}>
																	{item.name}
																</Link>
															</span>
															<span
																className="dropdown-item"
																onClick={() => actions.delToFavorites(item.name)}>
																<i
																	className="fa fa-trash float-right"
																	aria-hidden="true"
																/>
															</span>
														</div>
													)}
												</li>
											);
										})
									) : (
										<li>
											<span className="dropdown-item">Sin elementos</span>
										</li>
									)}
								</ul>
								<button
									type="button"
									className="btn btn-danger dropdown-toggle"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									{store.userLoggedIn.first_name + " " + store.userLoggedIn.last_name}
								</button>
								<div className="dropdown-menu">
									<Link to="/logout" className="dropdown-item" href="#">
										Logout
									</Link>
								</div>
							</div>
						) : (
							<div className="dropdown">
								<button
									className="btn btn-danger dropdown-toggle"
									type="button"
									id="dropdownMenu2"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									Get StarWars User!
								</button>
								<div className="dropdown-menu" aria-labelledby="dropdownMenu2">
									<Link to="/register">
										<button className="dropdown-item" type="button">
											<i className="fa fa-user-plus" aria-hidden="true" /> Register
										</button>
									</Link>
									<Link to="/login">
										<button className="dropdown-item" type="button">
											<i className="fa fa-key" aria-hidden="true" /> Login
										</button>
									</Link>
								</div>
							</div>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
};
