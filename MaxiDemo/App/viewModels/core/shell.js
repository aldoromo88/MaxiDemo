define(['knockout', 'logger', '../../proxies/userProxy'], function (ko, logger, userProxy) {
    init();

    logger.info('Probando', 'Test');

    var _pluginHolder = $('#pluginHolder');
    var _title = ko.observable('Maxi Demo');
    var _userContext = ko.observable();
    var _opeenTabs = ko.observableArray();
    var _tabCount = ko.observable(-1);

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

        if (menuItem.isSingleInstance) {
            var pluginName = menuItem.Name.replace(/ /g, '');
            var index = $('#tabs li').index($('li[type="' + pluginName + '"]'));
            if (index >= 0) {
                _pluginHolder.tabs({ active: index });
            } else {
                createNewTab(menuItem, false);
            }
        } else {
            createNewTab(menuItem, true);
        }
    }

    function createNewTab(menuItem, requireId) {
        var parentName = menuItem.ParentName.replace(/ /g, '');
        require(['viewModels/' + parentName + '/' + menuItem.Name, 'text!views/' + parentName + '/' + menuItem.Name + '.html'], function (viewModel, view) {
            var pluginName = menuItem.Name.replace(/ /g, '');
            var tabsSameTypeCount = $('#tabs li[type^="' + pluginName + '"]', _pluginHolder).size();
            var tabName = requireId ? pluginName + '-' + tabsSameTypeCount : pluginName;

            _opeenTabs.push({
                Name: pluginName,
                NavTabId: '#' + tabName,
                TabId: tabName,
                Description: menuItem.Description,
                View:view
            });

            _tabCount(_opeenTabs().length);
            _pluginHolder.tabs({ active: _opeenTabs().length - 1 });
            ko.applyBindings(viewModel, document.getElementById(tabName).children[0]);
        });
    }

    function closeTab(menuItem) {
        _opeenTabs.remove(function (item) { return item.TabId == menuItem.TabId; });
        _tabCount(_opeenTabs().length);
    }

    return {
        Title: _title,
        UserContext: _userContext,
        OpenTabs: _opeenTabs,
        TabCount:_tabCount,
        Login: login,
        MenuSelected: menuSelected,
        CloseTab:closeTab,
        
    };


});