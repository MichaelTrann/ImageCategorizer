import React, { Component } from 'react';
import './PhotoHistory.css';

class PhotoHistory extends Component {


    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="btn-toolbar">
                    <button type="button" className="btn btn-primary mr-1"> &lt; Back </button>
                    <button type="button" className="btn btn-primary  "> Forward &gt; </button>
                </div>
                
                <ul className="navbar-nav ml-auto">
                    <button className="btn btn-success btn-sm mr-sm-2" type="button">Upload</button>
                    <input className="form-control-sm" placeholder="Search"></input>
                    <button className="btn btn-success -sm" type="button">search</button>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Username</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Link 1</a>
                            <a className="dropdown-item" href="#">Link 2</a>
                            <a className="dropdown-item" href="#">Link 3</a>
                        </div>
                    </li>
                </ul>

            </nav>

            <div className="photolog-container col-sm-12" >
            <p>hello</p>

            </div>
        </div>
    
             
            
        );
    }
}


export default PhotoHistory;
