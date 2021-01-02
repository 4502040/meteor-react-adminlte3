import React from 'react';
import { NavLink } from 'react-router-dom';

export const FrontendNav = () => {  


  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    
    <ul className="navbar-nav">      
      <li className="nav-item d-none d-sm-inline-block">
        <NavLink exact to='/' className="nav-link" activeClassName='active'>Home</NavLink>        
      </li>
      <li className="nav-item d-none d-sm-inline-block">
      <NavLink exact to='/contact' className="nav-link" activeClassName='active'>Contact</NavLink>
      </li>      
    </ul>

    
    <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-navbar" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>    
    
  </nav>
  )

}
  

