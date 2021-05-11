import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import CharactersImg from "../../img/characters.png";
export const Cdetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const styles = {
		maxwidth: "540px"
	};
	return (
		<div className="container">
			<h2 className="text-danger">
				<strong>Characters Details </strong>
			</h2>
			<div className="card mb-3" style={styles}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={CharactersImg} alt="Characters" className="img-fluid" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.characters[params.theid].name}</h5>
							<p className="card-text">{store.characters[params.theid].url}</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Cdetails.propTypes = {
	match: PropTypes.object
};
