define(['knockout', 'jqueryui'], function (ko) {
    ko.bindingHandlers.menu = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var menu = $(element);
            menu.menu({ position: { my: "left bottom", at: "right-50 top+0" } });
            $('.ui-menu-icon.ui-icon.ui-icon-carat-1-e').remove();
            //$(element).menu();
            

            var blurTimer;
            var blurTimeAbandoned = 300;  // time in ms for when menu is consider no longer in focus

            menu.on('menufocus', function () {
                clearTimeout(blurTimer);
            });

            menu.on('menublur', function (event) {
                blurTimer = setTimeout(function () {
                    menu.menu("collapseAll", null, true);
                }, blurTimeAbandoned);
            });
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            $(element).menu({ position: { my: "left bottom", at: "right-50 top+0" } });
            $('.ui-menu-icon.ui-icon.ui-icon-carat-1-e').remove();
            //$(element).menu();
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