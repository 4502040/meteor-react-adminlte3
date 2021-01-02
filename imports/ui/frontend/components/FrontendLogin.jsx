import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export const FrontendLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const submit = e => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password, (error)=>{

          if (error) {
            console.log(error);
          } else {
            return history.push('/backend');
          }

        });
    }

    return (
        <div className="login-page">
            <div className="login-box">
            <div className="login-logo">
              <Link to='/'><b>Admin</b>LTE</Link>               
            </div>
  
            <div className="card">
                <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>

                <form onSubmit = { submit }>
                    <div className="input-group mb-3">
                        <input type="text"
                        placeholder="Username" 
                        name="username"
                        required
                        onChange={e=> setUsername(e.target.value)}
                        className="form-control" />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                    <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    onChange = {e=> setPassword(e.target.value)}
                    className="form-control" 
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-8">
                        <div className="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">
                            Remember Me
                        </label>
                        </div>
                    </div>
         
                    <div className="col-4">
                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </div>
          
                    </div>                    
                </form>

      <div className="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div>
      

      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p className="mb-0">
        <a href="register.html" className="text-center">Register a new membership</a>
      </p>
    </div>
    
  </div>
</div>
        </div>        
    )
}