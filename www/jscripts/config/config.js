require.config({
    baseUrl: 'jscripts',
    urlArgs: "bust=" + (new Date()).getTime(),

    paths: {
        'templates': 'templates',
        /** ----library files reference start---- */
        "jquery": 'vendor-libs/jquery-3.1.1',
        "bootstrap": 'vendor-libs/bootstrap',
        "handlebars": 'vendor-libs/handlebars-v4.0.5',
        /** ----library files reference end---- */

        /** ----core-modules files reference start---- */
        "app": 'core-modules/app',
        "courseLoader": 'core-modules/courseLoader',
        "JEL_Header_Controller":"core-modules/JEL_Header_Controller",
        "JEL_Content_Controller":"core-modules/JEL_Content_Controller",
        "JEL_Navigation_Controller":"core-modules/JEL_Navigation_Controller",
        "JEL_PageType_Controller":"core-modules/JEL_PageType_Controller",
        /** ----core-modules files reference end---- */

        /** ----utils files reference start---- */
        "jsonLoader": 'core-modules/utils/jsonLoader',
        "Debugger": 'core-modules/utils/Debugger',
        "stringUtility": 'core-modules/utils/stringUtility',
        /** ----utils files reference end---- */

        /** course settings and other configuration files */
        "course_settings": 'json/course_Settings.json'
    },
    shim: {
        'bootstrap': {
            "deps": ['jquery'],
            exports: 'bootstrap'

        }
        // handlebars:{
        //     "deps":[],
        //     exports:'handlebars'
        // }
    }

});
require(['Debugger', 'jquery', 'jsonLoader', 'stringUtility'], function () {

    var Debugger = require('Debugger');

    require(['app'], function (app) {
        Debugger.info('Application init called')
        app._initialize($('#app'));

    });



});