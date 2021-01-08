import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Post from '../imports/models/post.model';
import { Migrations } from 'meteor/percolate:migrations';
import '../server/migrations';
import '../server/methods';
import Poster from '../imports/models/poster.model';
import createThumbnails from '../imports/lib/createThumbnails';
import Image from '../imports/models/image.model';


const USERNAME = 'admin';
const PASSWORD = 'admin';

Meteor.startup(() => {
  // If the Links collection is empty, add some data.

  Migrations.migrateTo('latest');

  if (!Accounts.findUserByUsername(USERNAME)) {

    Accounts.createUser({
      username: USERNAME,
      password: PASSWORD
    });
  }

  Poster.on('afterUpload', function(fileRef) {
    // Run `createThumbnails` only over PNG, JPG and JPEG files
    if (/png|jpe?g/i.test(fileRef.extension || '')) {
      createThumbnails(this, fileRef, (error, fileRef) => {
        if (error) {
          console.error(error);
        }
      });
    }
  });

  Image.on('afterUpload', function(fileRef) {
    // Run `createThumbnails` only over PNG, JPG and JPEG files
    if (/png|jpe?g/i.test(fileRef.extension || '')) {
      createThumbnails(this, fileRef, (error, fileRef) => {
        if (error) {
          console.error(error);
        }
      });
    }
  });
  
});
