﻿requirejs.config({
    paths: {
        'text': '../Scripts/text',
        'knockout': '../Scripts/knockout-3.0.0.debug',
        'koMapping': '../Scripts/knockout.mapping-latest.debug',
        'jquery': '../Scripts/jquery-2.0.3',
        'jqueryui': '../Scripts/jquery-ui-1.10.4.custom',
        'domReady': '../Scripts/domReady',
        'breeze': '../Scripts/breeze.min',
        'Q': '../Scripts/q',
        'toastr': '../Scripts/toastr',
        'linq': '../Scripts/linq',
        'logger': 'helpers/logger'
        //'durandal': '../Scripts/durandal',
        //'plugins': '../Scripts/durandal/plugins',
        //'transitions': '../Scripts/durandal/transitions'
    },
    shim: {
        jqueryui: {
            deps: ['jquery'],
            exports: '$'
        },
        koMapping: {
            deps: ['knockout'],
            exports: 'koMapping'
        }

        //knockout: {
        //    exports: 'ko'
        //}
    }
});

//define('jquery', function () { return jQuery; });
//define('knockout', ko);

require(['knockout', 'viewModels/core/shell', 'customBindings/jqueryUiBindings', 'Q', 'domReady!'], function (ko, shellViewModel) {
    ko.applyBindings(shellViewModel);
});