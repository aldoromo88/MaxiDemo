define(['knockout', 'jqueryui'], function (ko) {
    ko.bindingHandlers.menu = {        
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            $(element).menu();
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            $(element).menu();
        }
    };
});