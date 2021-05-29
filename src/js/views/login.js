import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
export const Login = () => {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	//const [resultLogin, setResultLogin] = useState("");

	const validateForm = () => {
		return email.length > 0 && password.length > 0;
	};

	const handleSubmit = e => {
		event.preventDefault();
		actions.login(email, password);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-2" />
				<div className="col-lg-6 col-md-8 login-box">
					<div className="col-lg-12 login-key">
						<i className="fa fa-key" aria-hidden="true" />
					</div>
					<div className="col-lg-12 login-title">STARWARS USER ACCESS</div>

					<div className="col-lg-12 login-form">
						<div className="col-lg-12 login-form">
							<form onSubmit={handleSubmit}>
								<div className="form-group">
									<label className="form-control-label">USERNAME</label>
									<input
										autoFocus
										type="text"
										className="form-control"
										value={email}
										onChange={e => setEmail(e.target.value)}
										placeholder="Ingrese su email para ingresar"
										autoComplete="username"
									/>
								</div>
								<div className="form-group">
									<label className="form-control-label">PASSWORD</label>
									<input
										type="password"
										className="form-control"
										value={password}
										onChange={e => setPassword(e.target.value)}
										autoComplete="current-password"
										placeholder="Ingrese su password"
									/>
								</div>
								<div className={store.userFailed ? "d-inline" : "d-none"}>
									<p className="alert alert-danger">{store.userFailed ? store.userFailed : ""}</p>
								</div>
								<div className="col-lg-12 loginbttm">
									<div className="col-lg-6 login-btm login-text" />
									<div className="col-lg-6 login-btm login-button">
										<button
											type="submit"
											className="btn btn-outline-primary"
											disabled={!validateForm()}>
											LOGIN
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-3 col-md-2" />
				</div>
			</div>
		</div>
	);
};
