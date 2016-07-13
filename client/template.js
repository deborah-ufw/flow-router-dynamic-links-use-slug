// client/template.js


Template.blogPost.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var postSlug = FlowRouter.getParam('postSlug');
    self.subscribe('singlePost', postSlug);  
  });
});

Template.blogPost.helpers({
  post: function() {
    var postSlug = FlowRouter.getParam('postSlug');
    var post = Posts.findOne({slug: postSlug}) || {};
    return post;
  }
});

Template.blogHome.helpers({
	post: function(){
    return Posts.find();
	}
});

// this has to be here (does not work in the helper statement) or the data is not delivered to blogHome
Meteor.subscribe("posts");


