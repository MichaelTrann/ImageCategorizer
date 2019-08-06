import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './RegisterPage.css';

class RegisterPage extends Component {
    render() {
        return (
            <div>
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
                        <div class="col-md-4 col-md-offset-4 ">
                            <button type="submit" class="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>


        );
    }
}
export default RegisterPage;