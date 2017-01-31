define(function () {
    var className = "stringUtility";

    var stringUtility = stringUtility || {};

    stringUtility.getFilename = function (path) {
        var path = path;
        path = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));

        return path;
    }
    stringUtility.CapitalCase = function(params){
        return params.toUpperCase();
    }
    return stringUtility;
})