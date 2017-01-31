define(
    [
        'jquery',
        'Debugger',
        'app'
    ],
    function($,Debugger,app) {

     var className = "pageTyeController";
     var pageTypeController = pageTypeController || {};
     var courseData = null;
     var currentModuleIndex = 0;
     var currentTopicIndex = 0;
     var currentPageIndex = 0;

     var currentModuleObject=null;
     var currentTemplateObject=null;
     var currentModuleTotalTopics=0;
     var currentTopicsTotalpages=0;
     var app = null;
     var $ = null;
     var Debugger = null;   

     var currentPageTemplate='';
     var currentModuleTitle = '';
     var currentPageTitle = '';


     pageTypeController._initialize = function(data,returnCallback){
         app = require('app');
         $ = require('jquery');
         Debugger = require('Debugger');

         courseData = data;
         //console.log(courseData.modules[0]);
         currentModuleObject = courseData.modules[currentModuleIndex];
         currentModuleTotalTopics = courseData.modules[currentModuleIndex].module[2].topics.length;
         currentTopicsTotalpages  = courseData.modules[currentModuleIndex].module[2].topics[currentTopicIndex].topic[2].pages.length
         currentTemplateObject    = courseData.modules[currentModuleIndex].module[2].topics[currentTopicIndex].topic[2].pages[currentPageIndex]
        
         
         returnCallback();
     }  

     pageTypeController.loadStartPage = function(){         
         app.loadPage(currentTemplateObject);
     }
     return pageTypeController; 
});