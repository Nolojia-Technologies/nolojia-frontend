// contains the logic for login component

import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import LoginImage from './images/loginimage.jpg';


const Login = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const passwordInputRef = useRef(null);
  const passwordButtonRef = useRef(null);


  const handleLogin = (event) => {
    event.preventDefault();
    // Javascript for login here, hehe!!! ..backend i guess
  };

  return (
    <div className="container row mt-5">
    <div className="col-md-1"></div>
      <div className="col-md-5">
      <img src={LoginImage} alt="loginimagee" className="img-fluid" />
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-4">
        <h1 className='font-weight: 600; text-align: left;'>Welcome to Nolojia</h1>
        <p className='signup'>Don't have an account? <a href="/signup">Sign up</a></p>
        <div className="btn-group d-grid gap-5 d-md-flex" role="group" aria-label="Login buttons">
          <button type="button" className="btn btn-primary btn-md rounded">Admin</button>
          <button type="button" className="btn btn-success btn-md rounded">Tutor</button>
          <button type="button" className="btn btn-warning btn-md rounded">Student</button>
          <button type="button" className="btn btn-info btn-md rounded">School</button>
        </div>
        <br></br>
        <form onSubmit={handleLogin}>
          <h4 className='signin'>Sign in</h4>
          <br></br>
            <div className="input">
                <input
                required
                type="text"
                value={username} onChange={handleUsernameChange}
                name="username"
                placeholder=" "/>
                <label>
                    Username
                    <sup>*</sup>
                </label>
            </div>
            <br></br>
            <div className="input">
                <input
                ref={passwordInputRef}
                id="password-input"
                type="password" _type="password"
                value={password} onChange={handlePasswordChange}
                name="password"
                placeholder=" "/>
                <label>Password</label>
                <div>
                <button
                ref={passwordButtonRef}
                id="password-btn"
                title="Toggle password visibility"
                onClick={(e) => {
                    e.preventDefault();
                    passwordInputRef.current.type =
                    passwordInputRef.current.type === 'password' ? 'text' : 'password';
                }}
                >
                👁️
                </button>
            </div>
        </div>
        <br></br>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary btn-sm">Login</button>
        </form>
        <br></br>
        <div className="social-buttons">
          <a href="/path/to/google/login"><img src="/path/to/google/image" alt="Google" /></a>
          <a href="/path/to/google/login"><img src="/path/to/google/image" alt="Facebook" /></a>
          <a href="/path/to/google/login"><img src="/path/to/google/image" alt="Instagram" /></a>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
};

export default Login;
