import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FrontendContact = () => {

  return (
  
    <div className="content-wrapper">
    <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Contact Page</h1>
            </div>{/**col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                <li className="breadcrumb-item active">Contact Page</li>
              </ol>
            </div>{/**col */}
          </div>{/**row */}
        </div>{/** .container-fluid */}
      </div>{/* .content-header */}
    
      {/**Main Content */}
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Contacts page</h5>

                <p className="card-text">
                  Welcome to Contact Page!
                </p>

                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
            
          </div>{/** .col-md-6 */}
          
        </div>{/** .row */}
       
      </div>{/** .container-fluid */}
    </div>

  </div>
  )

}
  

