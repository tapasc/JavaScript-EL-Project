define(function() {
    // 'use strict';
    var Debugger = Debugger || {};

    var className="Debugger";

    Debugger.log =function(param){
        console.log('LOG:: '+param);
    }
    Debugger.warn = function(){
        console.warn("LOG::"+param);        
    }
    Debugger.info = function(param){
        console.log("LOG::"+param);
    }
    Debugger.error = function(param){
        console.error("LOG::"+param);
    } 
    Debugger.debug = function(param){
        console.log("LOG"+param);
    }  
    
    return  Debugger;
     
});