/**
 * controller - To view course.
 */

define(function(require) {
  // Dependencies
  var CourseView = require("views/course-view");

  // Implementation
  return function() {
    new CourseView({ el: "#page-container" }).render();
  };
});
