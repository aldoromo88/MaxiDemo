define(['knockout', 'jqueryui'], function (ko) {
    ko.bindingHandlers.menu = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var menu = $(element);
            menu.menu({ position: { my: "left bottom", at: "right-50 top+0" } });
            $('.ui-menu-icon.ui-icon.ui-icon-carat-1-e').remove();

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
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            ko.utils.unwrapObservable(valueAccessor());
            $(element).parent().tabs("refresh");
        }
    };
    ko.bindingHandlers.datepicker = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var $el = $(element);

            //initialize datepicker with some optional options
            $el.datepicker({
                changeMonth: true,
                changeYear: true,
                showAnim: 'fadeIn'
            });

            //handle the field changing
            ko.utils.registerEventHandler(element, "change", function () {
                var observable = valueAccessor();
                observable($el.datepicker("getDate"));
            });

            //handle disposal (if KO removes by the template binding)
            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                $el.datepicker("destroy");
            });
        },
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor()),
                $el = $(element),
                current = $el.datepicker("getDate");

            if (value - current !== 0) {
                $el.datepicker("setDate", value);
            }
        }
    };



    ko.bindingHandlers.button = {
        init: function (element) {
            $(element).button(); // Turns the element into a jQuery UI button
        },
        update: function (element, valueAccessor) {
            var currentValue = valueAccessor();
            // Here we just update the "disabled" state, but you could update other properties too
            $(element).button("option", "disabled", currentValue.enable === false);
        }
    };
});