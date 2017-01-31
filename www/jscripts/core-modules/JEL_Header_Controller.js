define(['jquery','Debugger','app'],function($,Debugger,app){
        var $ = $;
        var app = null;
        var Debugger = null;

    var JEL_Header_Controller =JEL_Header_Controller || {} ;
    var headerElem = null;
    var courseTitle = ''

    JEL_Header_Controller._initialize = function(elem){
        app = require('app');
        //$ = require('$');
        Debugger = require('Debugger');


        Debugger.log("Header Controller initialized.")
        headerElem = $(elem);
        updateCourseTitle();
      
    }
    updateCourseTitle = function(){
        $("header .Title").html(app.getInstance().getTitle());
        Debugger.log('App = ='+app);
    }

    return JEL_Header_Controller;
})