import React, { useState, Fragment } from 'react';
import { FrontendPosts } from './components/FrontendPosts';
import { FrontendFooter } from './layout/FrontendFooter';
import { FrontendNav } from './layout/FrontendNav';


export const Frontend = ({children}) => {  

  return (
    <div className="wrapper">

    <FrontendNav />

    {children}
    
    <FrontendFooter />      

    </div>
  )

}
  

