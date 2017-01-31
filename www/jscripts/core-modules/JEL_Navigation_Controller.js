define(['jquery','app','Debugger'],function($,app,Debugger){
     
    var JEL_Navigation_Controller = JEL_Navigation_Controller || {} ;
    var navigationElem = null;
    var courseTitle = ''
    var $ = null;
    var app = null;
    
    JEL_Navigation_Controller._initialize = function(elem){
        $ = require('jquery');
        app = require('app');

        navigationElem = $(elem);
    }

    updateNavigation = function(){

    }

    return JEL_Navigation_Controller;
})