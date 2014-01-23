define(['knockout', 'jqueryui'], function (ko) {
    ko.bindingHandlers.menu = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            $(element).menu();
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            $(element).menu();
        }
    };
    ko.bindingHandlers.tabs = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var tabContainer = $(element).parent();
            tabContainer.tabs({ show: { effect: "slideDown", duration: 150 } });
            tabContainer.find(".ui-tabs-nav").sortable({
                axis: "X",
                stop: function () {
                    tabContainer.tabs("refresh");
                }
            });
            //var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
            //var value = valueUnwrapped.value;
            //value.subscribe(function () {
            //    tabContainer.tabs("refresh");
            //});
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            ko.utils.unwrapObservable(valueAccessor());
            $(element).parent().tabs("refresh");
        }
    };
});