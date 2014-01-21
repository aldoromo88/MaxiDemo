define(['knockout'], function (ko) {

    var _title = ko.observable('Maxi Demo');
    var _menuOptions = ko.observableArray([
    {
        description: 'Cobranza',
        menuChilds: [
            { description: 'RepCobranza1', path: './../cobranza/rep1', name: 'RepCobranza1', isSingleInstance: false },
            { description: 'RepCobranza2', path: './../cobranza/rep2', name: 'RepCobranza2', isSingleInstance: false },
            { description: 'RepCobranza3', path: './../cobranza/rep3', name: 'RepCobranza3', isSingleInstance: false }
        ]
    },
    {
        description: 'Finanzas',
        menuChilds: [
            { description: 'RepFinanzas1', path: './../finanzas/rep1', name: 'RepFinanzas1', isSingleInstance: false },
            { description: 'RepFinanzas2', path: './../finanzas/rep2', name: 'RepFinanzas2', isSingleInstance: false },
            { description: 'RepFinanzas3', path: './../finanzas/rep3', name: 'RepFinanzas3', isSingleInstance: false }
        ],
    },
    {
        description: 'Ventas',
        menuChilds: [
            { description: 'RepVentas1', path: './../ventas/rep1', name: 'RepVentas1', isSingleInstance: false },
            { description: 'RepVentas2', path: './../ventas/rep2', name: 'RepVentas2', isSingleInstance: false },
            { description: 'RepVentas3', path: './../ventas/rep3', name: 'RepVentas3', isSingleInstance: false }
        ],
    }
    ]);


    var menuItems = [];

    menuItems.push({
        description: 'Transfer',
        icon: 'ui-icon ui-icon-disk',
        menuChilds: [
            { description: 'Search Transfer', path: './../transfers/search_transfer', icon: 'ui-icon ui-icon-disk', name: 'Transfer Search', isSingleInstance: false },
            { description: 'Status Change', path: './../transfers/status_change', icon: 'ui-icon ui-icon-disk', name: 'Status Change', isSingleInstance: true }
        ]
    });

    menuItems.push({
        description: 'Process',
        icon: 'ui-icon ui-icon-zoomin',
        menuChilds: [
            { description: 'Signature Hold', path: './../transfers/search_transfer', icon: 'ui-icon ui-icon-disk', name: 'Signature Hold', isSingleInstance: true },
            { description: 'Denay Hold', path: './../transfers/search_transfer', icon: 'ui-icon ui-icon-disk', name: 'Denay Hold', isSingleInstance: true },
            { description: 'OFAC Hold', path: './../transfers/search_transfer', icon: 'ui-icon ui-icon-disk', name: 'OFAC Hold', isSingleInstance: true },
            { description: 'KYC Hold', path: './../transfers/status_change', icon: 'ui-icon ui-icon-disk', name: 'KYC Hold', isSingleInstance: true },
            { description: 'Deposit Hold', path: './../transfers/search_transfer', icon: 'ui-icon ui-icon-disk', name: 'Deposit Hold', isSingleInstance: true }
        ]
    });

    menuItems.push({
        description: 'Application',
        icon: 'ui-icon ui-icon-zoomout',
        menuChilds: [
            { description: 'Users', path: './../transfers/search_transfer', icon: 'ui-icon ui-icon-disk', name: 'Users', isSingleInstance: true },
            { description: 'Logout', path: './../transfers/status_change', icon: 'ui-icon ui-icon-disk', name: 'Logut', isSingleInstance: true }
        ]
    });

    return {
        Title: _title,
        MenuOptions: _menuOptions
    };


});