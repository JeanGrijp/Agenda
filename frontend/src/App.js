import React from 'react';
import api from './services/api'
import './App.css';

function App() {
  return (
    <div className="container">
      <form action="" method="post">
        <h1>Login</h1>
        <input type="email" name="" placeholder="Login" id=""/>
        <input type="password" name="" placeholder="Senha" id=""/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  );
}

export default App;
