define(['knockout', 'logger'], function(ko, logger) {
    var _title = ko.observable('Reporte de ventas mensual');

    return {
        Title: _title
    };

});