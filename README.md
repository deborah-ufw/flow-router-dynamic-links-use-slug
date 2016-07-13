
# Example Meteor app with dynamic list of db objects linked to a single page for each by slug (pretty URL)

This is a revised version of the very simple example Kadira app found <a href="https://github.com/flow-examples/flow-router-guide-example/">here</a>.

- home page dynamically pulls in a linked list of items from the mongo db 
  - *Kadira example app used a static hard link*
- links and router use slug (pretty URL) instead of _id

I used <a href="https://robomongo.org/">RoboMongo</a> to manipulate the original database, and removed the code that pre-populated a single item. 

###Some Meteor versions need to have "check" package added

Some versions of Meteor include the "check" package and some don't. If you are confronted with error "ReferenceError: check is not defined", make sure you add the "check" package to Meteor.

**$ meteor add check**
