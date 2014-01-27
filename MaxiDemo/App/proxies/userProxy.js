define(['proxies/baseProxy'], function (baseProxy) {

    function getMenuOprion(callback) {
        baseProxy.AjaxRequest('GET', 'Api/User', {}, callback);
    }

    return {
        GetMenuOprion: getMenuOprion
    };
});