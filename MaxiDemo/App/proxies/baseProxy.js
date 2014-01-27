define(['logger'], function (logger) {

    function ajaxRequest(type,url,data,callback) {
        var options = {
            type: type,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            traditional: true,
            data: JSON.stringify(data),
            cache: false,
            success: function(response) {
                callback.call(this, response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                logger.error(textStatus, errorThrown);
            }
        };
        
        var antiForgeryToken = $("#antiForgeryToken").val();
        if (antiForgeryToken) {
            options.headers = {
                'RequestVerificationToken': antiForgeryToken
            };
        }
        return $.ajax(url, options);

    }

    return {
        AjaxRequest: ajaxRequest
    };
});