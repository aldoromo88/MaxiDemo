define(['logger'], function (logger) {

    function login(loginName, password, callback) {
        $.ajax({
            type: 'POST',
            url: 'Api/User',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            traditional: true,
            data: JSON.stringify({
                LoginName: loginName,
                Password: password
            }),
            cache: false,
            success: function (data) {
                callback.call(this, data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                logger.error(textStatus, errorThrown);
            }
        });


    }

    return {
        Login: login
    };
});