// Router module.
define(function(require){
    // Dependencies
    var Backbone = require('backbone');
    var HomeController = require('controller/list-course');
    var ViewCourseController = require('controller/view-course');
    var CreateCourseController = require('controller/create-course');
    var DeleteCourseController = require('controller/delete-course');
    var EditCourseController = require('controller/edit-course');
    var HomeController = require('controller/list-course');
    var UnderConstructioController = require('controller/under-construction');
    
    // Implementation
    return Backbone.Router.extend({

        initialize:function(){    
            console.log("Hello Router");  
        },

        routes:function(){

            return {
                "home" : HomeController,
                "viewcourse/:id": ViewCourseController,
                "createcourse": UnderConstructioController,
                "editcourse(/:id)" : UnderConstructioController,
                "deletecourse(/:id)": UnderConstructioController,
                "*splat":HomeController
            }
            
        }

    });

});