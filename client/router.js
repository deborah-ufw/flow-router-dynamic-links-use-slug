FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "blogHome"});
  }
});


FlowRouter.route('/:postSlug', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "blogPost"});
  }
});