/// <reference path="../typings/tsd.d.ts" />

export class ValueNotInObjects {
    constructor($parse: angular.IParseService) {
        var directive: angular.IDirective = {};
        directive.restrict = 'A';
        directive.require = 'ngModel'
        directive.link = function (scope: any, elem: any, attrs: any, ctrl: any) {
            ctrl.$parsers.unshift(function (viewValue) {
                var values = $parse(attrs.valueNotInObjects)(scope);
                var key = attrs.valueNotInObjectsKey;
                var allow = $parse(attrs.valueNotInObjectsAllowId)(scope);
                if (values.filter(e => e[key].toString() === viewValue && e.id !== allow).length > 0) {
                    ctrl.$setValidity('valueNotInObjects', false);
                    return undefined;
                } else {
                    ctrl.$setValidity('valueNotInObjects', true);
                    return viewValue;
                }
            });
        }
        return directive;
    }
};