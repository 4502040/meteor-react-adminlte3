import Poster from "../imports/models/poster.model";
import { check } from 'meteor/check';
import Image from "../imports/models/image.model";

Meteor.methods({
    RemoveFile(fileType, fileId) {
        
        check(fileType, String);
        check(fileId, String);
      
        
        try {

            if (fileType == 'Poster') {
                Poster.remove({_id: fileId});
            }

            if (fileType == 'Image') {
              Image.remove({_id: fileId});
            }
        } catch(err) {

            throw new Meteor.Error('RemoveFile', JSON.stringify(err));

        }

      // Do stuff...
  
    //   if (/* you want to throw an error */) {
    //     throw new Meteor.Error('pants-not-found', "Can't find my pants");
    //   }
  
      return true;
    },  
    RenameFile(fileType, fileId, newFileName) {
        
        check(fileType, String);
        check(fileId, String);
        check(newFileName, String);
      
        
        try {

            if (fileType == 'Poster') {

                Poster.update(fileId, {
                    $set: {
                        name: newFileName
                    }
                  });
            }

            if (fileType == 'Image') {

              Image.update(fileId, {
                  $set: {
                      name: newFileName
                  }
                });
          }
        } catch(err) {

            throw new Meteor.Error('RenameFile', JSON.stringify(err));

        }

      // Do stuff...
  
    //   if (/* you want to throw an error */) {
    //     throw new Meteor.Error('pants-not-found', "Can't find my pants");
    //   }
  
      return true;
    },  
    
  });