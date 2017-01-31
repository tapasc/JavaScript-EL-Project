define(['jquery','Debugger','app'],function($,Debugger,app){
        var $ = $;
        var app = null;
        var Debugger = null;

    var JEL_Header_Controller =JEL_Header_Controller || {} ;
    var headerElem = null;
    var courseTitle = ''

    JEL_Header_Controller._initialize = function(elem){
        app = require('app');
        $ = require('jquery');
        Debugger = require('Debugger');


        Debugger.log("Header Controller initialized.")
        headerElem = $(elem);
        updateCourseTitle();
      
    }
    updateCourseTitle = function(){
        $("header .Title").html(app.getInstance().getTitle());
        Debugger.log('App = ='+app);
    }

    JEL_Header_Controller.updateModuleTitle = function (){
        
    }
    JEL_Header_Controller.updateTopicTitle = function (){
        
    }
    return JEL_Header_Controller;
})