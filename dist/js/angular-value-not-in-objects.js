var module = angular.module('value-not-in-objects', []);
var Common;
(function (Common) {
    ValueNotInObjects.$inject = ["$parse"];
    function ValueNotInObjects($parse) {
        "ngInject";
        var directive = {};
        directive.restrict = 'A';
        directive.require = 'ngModel';
        directive.link = function (scope, elem, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                var values = $parse(attrs.valueNotInObjects)(scope);
                var key = attrs.valueNotInObjectsKey;
                var allow = $parse(attrs.valueNotInObjectsAllowId)(scope);
                if (values.filter(function (e) { return e[key].toString() === viewValue && e.id !== allow; }).length > 0) {
                    ctrl.$setValidity('valueNotInObjects', false);
                    return undefined;
                }
                else {
                    ctrl.$setValidity('valueNotInObjects', true);
                    return viewValue;
                }
            });
        };
        return directive;
    }
    Common.ValueNotInObjects = ValueNotInObjects;
    ;
})(Common || (Common = {}));
;
module.directive('valueNotInObjects', Common.ValueNotInObjects);
