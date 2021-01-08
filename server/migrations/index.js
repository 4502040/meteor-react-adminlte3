import { Migrations } from 'meteor/percolate:migrations';
import { Post } from '../../imports/models/post.model';

Migrations.add({
    version: 1,
    up() {            
  
      Post.update({}, {
        $set: { "createdAt": new Date() }
      }, {
        multi: true
      }); 
      
    },
    down() {

      Post.update({}, {
        $unset: { "createdAt": null }
      }, {
        multi: true
      });  
      
    }
  });