import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Post } from '../../../models/post.model';

import FileUpload from '../upload/FileUpload';
import ImageUploader from '../upload/ImageUploader';
import { useHistory } from 'react-router';

export const PostForm = () => {
  
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postDescription, setPostDescription] = useState('');

  const history = useHistory();

  //const files = Images.find({}).fetch();

    useEffect(()=>{
        
        $('#summernote').summernote({
          callbacks : {
            onChange: function(contents) {
                
              setPostContent(contents);
            }
        }
      });
        
    });

    const onSavePost = e => {
      
      e.preventDefault();
      
      const post = new Post({
         title: postTitle,
         content: postContent,
         description: postDescription
      });

      post.saveRecord((err,res)=>{
        
        if (!err) {

          return history.push('/backend/posts');

        }

      });
    };
  
  return (
  
  <div className="content-wrapper">
    <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Starter Page</h1>
            </div>{/**col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Starter Page</li>
              </ol>
            </div>{/**col */}
          </div>{/**row */}
        </div>{/** .container-fluid */}
      </div>{/* .content-header */}
    
      {/**Main Content */}
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">           
            

            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Новая запись</h3>
              </div>
              
              <form onSubmit = { onSavePost }>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Название</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Название записи" value={ postTitle } onChange= {(e) => setPostTitle(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Описание</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Описание" value = { postDescription } onChange = { (e) => setPostDescription(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Текст</label>
                    <textarea id="summernote" className="form-control" name="editordata" ></textarea>
                  </div>

                  <div className="form-group">
                  <div className="row">
              <div className="col-md-3 col-sm-3">
                <div className="nav flex-column nav-tabs h-100" id="vert-tabs-tab" role="tablist" aria-orientation="vertical">
                  <a className="nav-link active" id="vert-tabs-home-tab" data-toggle="pill" href="#vert-tabs-home" role="tab" aria-controls="vert-tabs-home" aria-selected="true">Постер</a>
                  <a className="nav-link" id="vert-tabs-profile-tab" data-toggle="pill" href="#vert-tabs-profile" role="tab" aria-controls="vert-tabs-profile" aria-selected="false">Картинки</a>
                </div>
              </div>
              <div className="col-md-9 col-sm-9">
                <div className="tab-content" id="vert-tabs-tabContent">
                  <div className="tab-pane text-left fade active show" id="vert-tabs-home" role="tabpanel" aria-labelledby="vert-tabs-home-tab">                  
                    <FileUpload postId={""}></FileUpload>
                  </div>
                  <div className="tab-pane fade" id="vert-tabs-profile" role="tabpanel" aria-labelledby="vert-tabs-profile-tab">
                     <ImageUploader postId={""}></ImageUploader>
                  </div>                  
                </div>
              </div>
            </div>
                  </div>

                  <div className="form-group">
                    
                  </div>
                  
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Опубликовать</label>
                  </div>
                </div>                

                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Добавить</button>
                </div>
              </form>
            </div>
              
          </div>{/** .col-md-6 */}
                    
        </div>{/** .row */}
       
      </div>{/** .container-fluid */}
    </div>

  </div>

  )

}
  

