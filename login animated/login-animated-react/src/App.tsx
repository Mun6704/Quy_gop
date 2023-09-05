import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <section className="logIn">
  <div className="login-box">
    <form action=''>
      <h2>Login</h2>
      <div className="input-box">
        <span className="icon"><i className="fa-solid fa-envelope" /></span>
        <input type="email" id='' required />
        <label htmlFor=''>Email</label>
      </div>
      <div className="input-box">
        <span className="icon"><i className="fa-solid fa-lock" /></span>
        <input type="password" id='' required />
        <label htmlFor=''>Password</label>
      </div>
      <div className="remember-forgot">
        <label htmlFor=''><input type="checkbox" id='' /> Remember me!</label>
        <a href="#">Forgot Password</a>
      </div>
      <button type="submit">Login</button>
      <div className="register-link">
        <p>Don't have an account? <a href="#">Register</a></p>
      </div>
    </form>
  </div>
</section>

  );
}

export default App;
