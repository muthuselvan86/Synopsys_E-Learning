/**
 * Require JS  - AMD config.
 */
define(function(){

    return require.config({
        enforceDefine:true,
        waitSeconds:15,
        baseUrl:'js',
        paths:{
            // Libraries
            'jquery':'vendor/jquery/dist/jquery',
            'underscore':'vendor/underscore/underscore',
            'backbone':'vendor/backbone/backbone',
            'backbone.paginator':'vendor/backbone.paginator/lib/backbone.paginator',
            'text':'vendor/text/text',
            'handlebars':'vendor/handlebars/handlebars',
            'validation': 'vendor/query-validator/validator',

        }
    });
});