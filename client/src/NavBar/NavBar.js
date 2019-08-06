import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">ImageCategorizer</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/PhotoLog">
                                    PhotoLog
                                </Link>
                            </li>
                            <li>
                                <Link to="/RegisterPage">
                                    Register
                                </Link>
                            </li>


                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/UploadPage"> <span class="glyphicon glyphicon-cloud-upload"> Upload</span>
                                </Link>

                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span>Username
                                <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#"><span class="glyphicon glyphicon-log-out"></span> Log out</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-lock"></span> Account Details</a></li>
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
            </div>
        );
    }
}


export default NavBar;