import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './LoginPage.css';


class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault(); 
        const userData = {
            email: this.state.email,
            password: this.state.password
        }; console.log(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div style={{ marginTop: "4rem" }} className="row">
                    <div className="form-group col-md-4 col-md-offset-4">
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Login</b> below
              </h4>
                            <p className="grey-text text-darken-1">
                                Don't have an account? <Link to="/RegisterPage">Register</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type="submit"
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Login
                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            /*             <div>
                            <form>
                                <div class="form-group col-md-4 col-md-offset-4">
                                    <label for="inputEmail" class="col-md-4 col-md-offset-4 col-form-label">Email</label>
                                    <div class="col-md-4 col-md-offset-4">
                                        <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
                                    </div>
                                </div>
                                <div class="form-group col-md-4 col-md-offset-4">
                                    <label for="inputPassword" class="col-md-4 col-md-offset-4 col-form-label">Password</label>
                                    <div class="col-md-4 col-md-offset-4">
                                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                                    </div>
                                </div>
                                <div class="form-group col-md-4 col-md-offset-4">
                                    <div class="col-md-4 col-md-offset-4">
                                        <button type="submit" class="btn btn-primary">Sign in</button>
                                    </div>
                                </div>
                                <div class="form-group col-md-4 col-md-offset-4 ">
                                    <div class="col-md-4 col-md-offset-4 ">
                                        <button type="submit" class="btn btn-primary">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
             */

        );
    }
}
export default LoginPage;
