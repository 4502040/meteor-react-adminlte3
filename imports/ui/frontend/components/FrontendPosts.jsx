import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FrontendPosts = () => {

  return (
  
    <div className="content-wrapper">
    <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Posts Page</h1>
            </div>{/**col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                <li className="breadcrumb-item active">Posts Page</li>
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
                <h5 className="card-title">Card title</h5>

                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>

                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>

            <div className="card card-primary card-outline">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>

                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>{/** .card */}
          </div>{/** .col-md-6 */}
          
        </div>{/** .row */}
       
      </div>{/** .container-fluid */}
    </div>

  </div>
  )

}
  

