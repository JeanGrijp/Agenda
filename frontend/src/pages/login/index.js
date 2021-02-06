import React, {useState} from 'react';
import api from '../../services/api';
import './login.css'


import google from "../../imagens/google.svg";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit (event) {
    event.preventDefault()
    const resposta = await api.post('/sessions/login', {email: email, password: password})
    const status = resposta.data.status
    if (status) {
      localStorage.setItem('usuario', resposta.data.id)
    }
  }
  return (

    <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input type="email" value={email} name="" placeholder="Login" onChange={event => setEmail(event.target.value)} id=""/>
        <input type="password" value={password} name="" placeholder="Senha" onChange={event => setPassword(event.target.value)} id=""/>
        <a className="forgetPassword" href="">Forget passord?</a>
        <input type="submit" value="Login"/>
        <p>Don't have a account? <a href="">Sign Up</a> </p>
        <div className="google">
          <img src={google} alt="" srcset=""/>
          <input type="button" value="Or Login with Google"/>
        </div>
      </form>
  )
};
