import React from 'react';
import api from './services/api'
import './App.css';

import google from "./imagens/google.svg"

function App() {
  return (
    <div className="container">
      <form action="" method="post">
        <h1>Sign In</h1>
        <input type="email" name="" placeholder="Login" id=""/>
        <input type="password" name="" placeholder="Senha" id=""/>
        <a className="forgetPassword" href="">Forget passord?</a>
        <input type="submit" value="Login"/>
        <p>Don't have a account? <a href="">Sign Up</a> </p>
        <div className="google">
          <img src={google} alt="" srcset=""/>
          <input type="button" value="Or Login with Google"/>
        </div>
      </form>
    </div>
  );
}

export default App;
