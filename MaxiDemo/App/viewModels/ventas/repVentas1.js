define(['knockout', 'logger'], function (ko, logger) {

    var _title = ko.observable('Reporte de ventas mensual'),
        _from = ko.observable(),
        _to = ko.observable();

    function getReport() {
        logger.info(_from(), 'Date selected.');
    }

    return {
        Title: _title,
        From: _from,
        To: _to,
        GetReport:getReport,

    };

});