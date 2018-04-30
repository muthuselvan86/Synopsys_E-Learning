/**
 * This view creates a row of panels.
 */
define(function(require) {
    // Dependencies
    var Backbone = require("backbone");
    var Handlebars = require("handlebars");
    var CourseViewTmpl = require("text!templates/course-view.html");
    var Session = require('app/session');
  
    //Implementation
    return Backbone.View.extend({
      // Events
      events: {
        'click .course-link':"handleClick"
      },
  
      template: Handlebars.compile(CourseViewTmpl),
  
      initialize: function(options) {
        this.options = options;
      },

      //Render the view
      render: function() {
        this.$el.html(this.template({ course: Session.getCourseData() }));
        return this;
      }
      
    });
  });
  