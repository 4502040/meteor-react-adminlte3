import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

const Poster = new FilesCollection({
  collectionName: 'poster',
  storagePath: '../../../../../uploads/poster',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    }
    return 'Please upload image, with size equal or less than 10MB';
  }
});

//Images.attachSchema(FilesCollection.schema);

if (Meteor.isClient) {
  //Meteor.subscribe('files.images.all');
}

if (Meteor.isServer) {
  Meteor.publish('poster.all', function () {
    return Poster.find().cursor;
  });

  Meteor.publish('poster.postId', function (postId) {    
    return Poster.find({"meta.postId": postId, "meta.userId": this.userId}).cursor;
  });

}

export default Poster;