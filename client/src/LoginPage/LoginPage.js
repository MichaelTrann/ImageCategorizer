import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">ImageCategorizer</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">Home</a></li>
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#"><span class="glyphicon glyphicon-cloud-upload"></span> Upload</a></li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span>Username
                        <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#"><span class="glyphicon glyphicon-log-out"></span>Log out</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-lock"></span>Account Details</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="navbar-form navbar-right">
                            <div class="form-group">
                                <input className="form-control-sm" placeholder="Search"></input>
                            </div>
                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>
                </nav>

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


        );
    }
}
export default LoginPage;
