import './App.css';
import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PhotoHistory from './PhotoHistory/PhotoHistory.js';
import PhotoLog from './PhotoLog/PhotoLog.js';
import LoginPage from './LoginPage/LoginPage.js';
import RegisterPage from './RegisterPage/RegisterPage.js';
import UploadPage from './UploadPage/UploadPage.js';
import NavBar from './NavBar/NavBar.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={PhotoHistory}></Route>
          <Route path="/PhotoLog" component={PhotoLog}></Route>
          <Route path="/LoginPage" component={LoginPage}></Route>
          <Route path="/RegisterPage" component={RegisterPage}></Route>
          <Route path="/UploadPage" component={UploadPage}></Route>


        </div>
      </Router>
    );
  }
  
} 

  

export default App;
