/**
 * This view creates a row of panels.
 */
define(function(require) {
  // Dependencies
  var Backbone = require("backbone");
  var Handlebars = require("handlebars");
  var CourseRowItemTmpl = require("text!templates/course-list-item.html");
  var Session = require('app/session');

  //Implementation
  return Backbone.View.extend({
    // Events
    events: {
      'click .course-link':"handleClick"
    },

    template: Handlebars.compile(CourseRowItemTmpl),

    initialize: function(options) {
      this.options = options;
    },
    //Render the view
    render: function() {
      this.$el.html(this.template({ course: this.options.course }));
      return this;
    },
    // Handle the click event.
    handleClick:function(e){
      e.preventDefault();
      Session.setCourseData(this.options.course || {});
      Backbone.history.navigate(e.currentTarget.hash,{trigger:true});
    }
  });
});
