define(['jquery','Debugger','app'],function($,Debugger,app){

    var JEL_Content_Controller = JEL_Content_Controller || {} ;
    var contentElem = null;
    var courseTitle = ''
    var app = null;


    JEL_Content_Controller._initialize = function(elem){
        app = require('app');
        contentElem = $(elem);
    }

    JEL_Content_Controller.loadPage = function(param){
        Debugger.info('template load called');

        $(contentElem).load("jscripts/templates/"+param+".html",function(){           
                app.onPageLoadComplete();
                Debugger.info('template loaded..1');
        });
    }    
    
    return JEL_Content_Controller;
})