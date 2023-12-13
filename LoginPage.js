import React, { useState} from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length < 8) {
       alert('Password must be at least 8 characters long.');
       return;
  }
    
    console.log('Login data:', { email, password });
    
    setLoginSuccess(true);
    setEmail('');
    setPassword('');
  };
   
  
  return (
    <div className="login-container">
      
      <h2>Login</h2>
      {loginSuccess ? (
        <>
          <p className="success-message">Login successful!</p>
          <Link to="/register">Register</Link>
        </>
      ) : (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="pass-text">Username:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            required
          />

        </div>
       
        <div className="form-group">
          <label htmlFor="password" className="email-text">Password:</label>
          
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
            required 
          />
          
        </div>
        <div className="form-group">
          <input type="submit" value="Login" />
          <br></br>
          <br></br>
          <h4>Don't you have account?</h4>
          <br></br>
          <Link to="/register">Sign Up</Link>
        </div>
      </form>
      )}
    </div>
  );
};

export default LoginPage;