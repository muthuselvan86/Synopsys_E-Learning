/**
 * controller - To list course.
 */

define(function(require) {
  // Dependencies
  var CourseListView = require("views/course-list");

  // Implementation
  return function() {
    if (!(this.listView instanceof CourseListView))
      this.listView = new CourseListView({el:"#page-container"});
    this.listView.resolvePromise();
  };
  
});
