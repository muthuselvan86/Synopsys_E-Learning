
/**
 * This view creates a row of panels.
 */
define(function(require) {
  // Dependencies
  var Backbone = require("backbone");
  var Handlebars = require("handlebars");
  var CourseRowTmpl = require("text!templates/course-list-row.html");
  var CourseListItemView = require("views/course-list-item");

  //Implementation
  return Backbone.View.extend({
    events: {},

    template: Handlebars.compile(CourseRowTmpl),

    initialize: function(options) {
      this.options = options;
    },

    render: function() {
      this.$el.html(this.template());
      this.renderSubviews();
      return this;
    },

    renderSubviews: function() {
      var i = 0;
      if (typeof this.options.rowArray !== undefined)
        for (var obj of this.options.rowArray) {
          new CourseListItemView({course:obj})
            .setElement(this.$el.find(".course-column-" + i))
            .render();
          i++;
        }
    }
  });
});
