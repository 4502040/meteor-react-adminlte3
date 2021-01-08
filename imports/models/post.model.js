import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';
import Poster from './poster.model';
import Image from './image.model';

const PostCollection = new Mongo.Collection('posts');

const Post = Class.create({
    name: 'Post',
    secured: true,
    collection: PostCollection,
    fields: {
        title: String,
        content: String,
        description: String,
        publishedAt: {
            type: Date,
            optional: true
        },
        createdAt: {            
            type: Date,
            default: function(){
                return new Date()
            }
        }
    },
    meteorMethods: {
        saveRecord() {          
          
          let postId = this.save();
          
          Poster.update({"meta.postId": "", "meta.userId": this.userId},{
              $set:{
                "meta.postId": postId
              }
          },{
              multi: false              
          });

          Image.update({"meta.postId": "", "meta.userId": this.userId},{
            $set:{
              "meta.postId": postId
            }
        },{
            multi: true              
        });

          return postId;
        }
      }

});

if (Meteor.isServer) {
    
    Meteor.publish('post.all', function () {
        return [
            Post.find({})
        ];
    }); 
  
    // Meteor.publish('image.postId', function (postId) {    
    //   return Image.find({"meta.postId": postId, "meta.userId": this.userId}).cursor;
    // });
  
  }

export default Post;
