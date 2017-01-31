define(function (require) {

    var jsonLoader = jsonLoader || {};

    var className = 'jsonLoader';

    var $ = require('jquery');
    var Debugger = require('Debugger');
    var stringUtility = require('stringUtility');


    jsonLoader.load = function (fileName, callback) {

        (typeof fileName === "string" && fileName != undefined) ? initiateload(fileName, callback) : fileTypeError(callback);
    }

    initiateload = function (file, callback) {

        $.getJSON({
            url: file+'?bust='+(new Date).getTime(),

            success: function (data) {
                callback(data, 'succ', stringUtility.getFilename(file));
                Debugger.info('file with name [' + file + 'with data ' + data + ' ] loaded successfully');
            },
            error: function (err) {
                callback('', 'fail', stringUtility.getFilename(file));
                Debugger.error('file with name [' + file + 'with data  ] error loading ');
            }
        })
    }
    fileTypeError = function (callback) {
        Debugger.info('fileType not String or undefined');
        //callback('error');
    }

    return {
        "load": jsonLoader.load
    };
})