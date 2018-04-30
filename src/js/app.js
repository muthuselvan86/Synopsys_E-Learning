
/**
 * Main module to start up the app.
 */
define(function(require){

    var Backbone = require('backbone');
    var Router = require('router/router');

    //Set-up the router.
    new Router();

    // Start the backbone history - Hash based.
    Backbone.history.start({
        pushState:false
    });

});