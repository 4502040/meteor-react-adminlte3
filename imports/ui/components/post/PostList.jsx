import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Post from '../../../models/post.model';

export const PostList = () => {

    const history = useHistory();    

    const { posts, postCount, isLoading } = useTracker(() => {
        const noDataAvailable = { posts: [], postCount: 0 };
        if (!Meteor.user()) {
          return noDataAvailable;
        }
        const handler = Meteor.subscribe('post.all');;
    
        if (!handler.ready()) {
          return { ...noDataAvailable, isLoading: true };
        }
    
        const posts = Post.find({}).fetch();
        const postCount = Post.find({}).count();
    
        return { posts, postCount };
      });

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
                Post Count: {postCount}
              </div>{/** .col-md-6 */}                  
              
            </div>{/** .row */}
           
          </div>{/** .container-fluid */}
        </div>
    
      </div>      
    )
}