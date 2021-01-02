import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';
// import '/imports/db/tasksMethods';
// import '/imports/api/tasksPub';


const USERNAME = 'admin';
const PASSWORD = 'admin';

Meteor.startup(() => {
  // If the Links collection is empty, add some data.

  if (!Accounts.findUserByUsername(USERNAME)) {

    Accounts.createUser({
      username: USERNAME,
      password: PASSWORD
    });
  }

  //const user = Accounts.findUserByUsername(USERNAME);


  
});
