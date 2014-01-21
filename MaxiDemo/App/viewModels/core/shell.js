define(['knockout','logger','../../proxies/userProxy'], function (ko,logger,userProxy) {

    init();

    logger.info('Probando', 'Test');

    var _title = ko.observable('Maxi Demo');
    var _userContext = ko.observable();
 

    function init() {
        login('Aldo', 'Test');
    }

    function login(loginName, password) {
        userProxy.Login(loginName, password, function (data) {
            _userContext(data);
        });
    }

    function menuSelected(menuItem) {
        logger.info('test', menuItem.Name);
    }

    return {
        Title: _title,
        UserContext: _userContext,
        Login: login,
        MenuSelected:menuSelected
    };


});