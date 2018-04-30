/**
 * collection - To store the courses.
 */
define(function(require) {
  // Dependencies
  var PageableCollection = require("backbone.paginator");
  var CourseModel = require("model/course");

  //Impementation
  return Backbone.PageableCollection.extend({
    url: "http://localhost:3000/inventory/list",
    model: CourseModel,
    mode: "client",
    state: {
      pageSize: 6,
      currentPage:0
    }
  });
});
