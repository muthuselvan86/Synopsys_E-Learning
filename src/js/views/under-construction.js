/**
 * This view creates a under-construction notice.
 */
define(function(require) {
    // Dependencies
    var Backbone = require("backbone");
    var Handlebars = require("handlebars");
    var UnderConstructionTmpl = require("text!templates/under-construction.html");
  
    //Implementation
    return Backbone.View.extend({
      // Events
      events: {},
  
      template: Handlebars.compile(UnderConstructionTmpl),

      //Render the view
      render: function() {
        this.$el.html(this.template());
        return this;
      }
      
    });
  });
  