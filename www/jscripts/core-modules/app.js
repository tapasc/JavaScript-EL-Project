
define([
    
    'jquery',
    'JEL_Header_Controller',
    'JEL_Content_Controller',
    'JEL_Navigation_Controller',
    'JEL_PageType_Controller',
    'jsonLoader',
    'stringUtility',
    'Debugger',
    ], function (
    
    $,
    Header_Controller,
    Content_Controller,
    Navigation_Controller,
    PageType_Controller,
    jsonLoader,
    stringUtility,
    Debugger
    ) {

    var app = app || {};
    var className = "app";

    var Debugger = Debugger;
    var jsonLoader = jsonLoader;
    var $ = $;
    var stringUtility = stringUtility;

    var Version = '';
    var publishType = '';
    var Splash = null;
    var devPhase = null;
    var courseTitle='';

    var courseData = null;
    var currentModule = 0;
    var currentTopic = 0
    var currentPage = 0;
    var currentModuleTitle = "";
    var currentTopicTitle = "";
    var currentPageTitle = "";
    var mainViewElem=null;

    /**
     * Controllers
     */
    var JEL_Content_Controller = Content_Controller;
    var JEL_Header_Controller = Header_Controller;
    var JEL_Navigation_Controller = Navigation_Controller;
    var JEL_PageType_Controller = PageType_Controller;

    app._initialize = function (elem) {    
        Debugger.info('application initialized');
        mainViewElem=elem;
        //$(content_element).html('Loading...');       
        loadCourseFiles('jscripts/json/course_settings.json');
    }

    loadCourseFiles = function (filename) {
        var debugFilename = stringUtility.getFilename(filename);

        switch (debugFilename) {
            case "course_settings":
                jsonLoader.load(filename, onloadCourseFiles);
                break;
            case "course_structure":
                jsonLoader.load(filename, onloadCourseFiles);
                break;
        }

    }

    onloadCourseFiles = function (data, status, filename) {

        if (status === 'succ' && filename == "course_settings") {

            data.version != undefined ? Version = data.version : Version = ''
            data.publishType != undefined ? publishType = data.publishType : publishType = ''
            data.phase != undefined ? devPhase = data.publishType : devPhase = null
            data.splash != undefined ? splash = data.publishType : splash = null
            data.courseTitle !=undefined ? courseTitle = data.courseTitle : courseTitle=''

            loadCourseFiles('jscripts/json/course_structure.json');

        } else if (status === 'succ' && filename == "course_structure") {
            parseCourseStructure(data);
        }

    }

    parseCourseStructure = function (data) {

        if (data) {
            //courseData = data.modules;
           
            Debugger.info("Course Data loaded");
            Debugger.info("Course Data started parsing");
            JEL_PageType_Controller._initialize(data,onParseCourseData);
            
            //
            //getBookmarkedData();

            //  currentModuleTitle = courseData[currentModule].module[0].module_title;
            //  currentTopicTitle = courseData[currentModule].module[2].topics[currentTopic].topic[0].topic_title
            //  currentPageTitle = courseData[currentModule].module[2].topics[currentTopic].topic[2].pages[currentPage].page_title
            // console.log(currentModuleTitle+"::"+currentTopicTitle+"::"+currentPageTitle);
        }

    }

    onParseCourseData = function(){
            Debugger.info("Course Data parsing completed");
            Debugger.log("getting courseMode")
            Debugger.log("Running in " + publishType + " Mode");

            publishType === "SCORM1.2" ? initLMSMode() : initStandaloneMode();
    }
    initStandaloneMode = function () {
        /** 
         * 
         * initialize controllers of different parts of pages
         * 
         *  **/
        JEL_Header_Controller._initialize($(mainViewElem).find(".JEL_Header_Wrapper"));
        JEL_Content_Controller._initialize($(mainViewElem).find(".JEL_Content_Wrapper"));
        JEL_Navigation_Controller._initialize($(mainViewElem).find(".JEL_Navigation_Wrapper"));
        
        loadPage('demo_template');

    }

    initLMSMode = function () {
        /** 
         * 
         * initialize SCORM1.2 API
         * 
         *  **/        
        SCORM.inititialize();
    }

    getBookmarkedData = function () {
        /** 
         * 
         * get course bookmark data from LMS when relaunched
         * 
         *  **/
    }

    app.loadNextPage = function () {

    }
    app.loadPreviousPage = function () {

    }

    loadPage = function (templatepath) {
        JEL_Content_Controller.loadPage(templatepath);
    }

    app.onPageLoadComplete = function(){
        //alert('onPageLoadComplete called');
    }

    /** Getter functions */
    app.getTitle = function(){
        return stringUtility.CapitalCase(courseTitle);
    }
    app.getVersion = function(){
        return stringUtility.CapitalCase(Version)
    }
    app.publishType = function(){
        return stringUtility.CapitalCase(publishType);
    }
    app.developmentPhase = function(){
        return stringUtility.CapitalCase(devPhase)
    }

    app.getInstance = function(){
        return app;
    }     
    return app;
})