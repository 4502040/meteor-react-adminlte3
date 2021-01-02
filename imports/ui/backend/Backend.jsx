import React, { useEffect } from 'react';
import { BackendFooter } from './layout/BackendFooter';


import { BackendNav } from './layout/BackendNav';
import { BackendSidebar } from './layout/BackendSidebar';

export const Backend = ({ children }) => {  
  
  useEffect(()=>{
        
    
  });

  return (

    <div className="wrapper">

    <BackendNav />

    <BackendSidebar />
    
    {children}

  {/** Control Sidebar */}
  <aside className="control-sidebar control-sidebar-dark">
    {/** Control sidebar content goes here */}
    <div className="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  </aside>{/** .control-sidebar */}

  {/** Main Footer */}
  <BackendFooter />
      

    </div>
  )

}
  

