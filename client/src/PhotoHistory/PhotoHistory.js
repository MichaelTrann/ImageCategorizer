import React, { Component } from 'react';
import './PhotoHistory.css';

class PhotoHistory extends Component {


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
                
                <div className="photolog-container" >
                    <div class="row">
                        <div class="col-sm-12"></div>
                    </div>


                </div>
            </div>



        );
    }
}


export default PhotoHistory;
