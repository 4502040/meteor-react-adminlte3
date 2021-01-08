import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const BackendSidebar = () => {  
  
  
  return (
      
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    
  <a href="index3.html" className="brand-link">
    <img src="/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a>

  
  <div className="sidebar">
    
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Alexander Pierce</a>
      </div>
    </div>

    
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw"></i>
          </button>
        </div>
      </div>
    </div>

    
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
       
      <li className="nav-item">
        <NavLink to="/backend" exact className="nav-link" activeClassName="active"> <i className="far fa-circle nav-icon"></i> <p>Главная</p></NavLink>
      </li>
       
      <li className="nav-item menu">

                
<a href="#" className="nav-link">
  <i className="nav-icon fas fa-tachometer-alt"></i>
  <p>
    Записи
    <i className="right fas fa-angle-left"></i>
  </p>
</a>
<ul className="nav nav-treeview">
<li className="nav-item">
  <NavLink to="/backend/posts/create" exact className="nav-link" activeClassName="active"> <i className="fa fa-plus nav-icon"></i> <p>Создать</p></NavLink>
  </li>
<li className="nav-item">
  <NavLink to="/backend/posts" exact className="nav-link" activeClassName="active"> <i className="far fa-circle nav-icon"></i> <p>Список</p></NavLink>
  </li>
  <li className="nav-item">
  <NavLink to="/backend/main" exact className="nav-link" activeClassName="active"> <i className="far fa-circle nav-icon"></i> <p>Main</p></NavLink>
  </li>
  <li className="nav-item">            
  
    <a href="#" className="nav-link">
      <i className="far fa-circle nav-icon"></i>
      <p>Active Page</p>
    </a>
  </li>
  <li className="nav-item">
    <a href="#" className="nav-link">
      <i className="far fa-circle nav-icon"></i>
      <p>Inactive Page</p>
    </a>
  </li>
</ul>
</li>


        <li className="nav-item menu">

                
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt"></i>
            <p>
              Starter Pages
              <i className="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
          <li className="nav-item">
            <NavLink to="/backend" exact className="nav-link" activeClassName="active"> <i className="far fa-circle nav-icon"></i> <p>Home</p></NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/backend/main" exact className="nav-link" activeClassName="active"> <i className="far fa-circle nav-icon"></i> <p>Main</p></NavLink>
            </li>
            <li className="nav-item">            
            
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Active Page</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Inactive Page</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-th"></i>
            <p>
              Simple Link
              <span className="right badge badge-danger">New</span>
            </p>
          </a>
        </li>
      </ul>
    </nav>
    
  </div>
  
</aside>

  )

}
  

