// server/app.js

Meteor.publish('posts', function () {
  return Posts.find({});  
  // gets Posts from subscribe statement in template.js
});


Meteor.publish('singlePost', function(id) {
  check(id, String);
  return Posts.find({_id: id});
  //gets Posts from statement in collections.js
});



 
