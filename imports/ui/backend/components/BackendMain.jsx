import React from 'react';


export const BackendMain = () => {  
  
  
  return (
  
  <div className="content-wrapper">
    <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Main Page</h1>
            </div>{/**col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Main Page</li>
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
            Main Page Content
          </div>{/** .col-md-6 */}                  
          
        </div>{/** .row */}
       
      </div>{/** .container-fluid */}
    </div>

  </div>

  )

}
  

