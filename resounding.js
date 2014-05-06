Users = new Meteor.Collection("Users");



if (Meteor.isServer) {

  Meteor.startup(function () {
  	Users.remove()

    // code to run on server at startup
  });
}

if (Meteor.isClient) {

}

