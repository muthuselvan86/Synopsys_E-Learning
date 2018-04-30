
/**
 * controller - Under construction course.
 */
define(function(require) {
  // Dependencies
  var UnderConstructionView = require("views/under-construction");

  // Implementation
  return function() {
    if (!(this.view instanceof UnderConstructionView))
      this.view = new UnderConstructionView({ el: "#page-container" });
    this.view.render();
  };
});
