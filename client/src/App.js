import './App.css';
import React, { Component } from 'react';
import PhotoHistory from './PhotoHistory/PhotoHistory.js';
import PhotoLog from './PhotoLog/PhotoLog.js';
import LoginPage from './LoginPage/LoginPage.js'
import RegisterPage from './RegisterPage/RegisterPage.js'

class App extends Component {
  // We will add this part later
  /*
  render() {
    return (

    );
  }

*/


/*     render(){ 
    return (
        <PhotoHistory/>
    );
  }   */
  

     render(){
    return (
      <PhotoLog/>
    );
  }   

/*    render(){
    return (
      <RegisterPage/>
    )
  }  */
/*  
     render(){
    return (
      <LoginPage/>
    )
  }  */ 
} 

  

export default App;
