﻿/// <reference path="../typings/tsd.d.ts" />
var module: angular.IModule = angular.module('value-not-in-objects', []);
module Common {
    export function ValueNotInObjects($parse: angular.IParseService): angular.IDirective {
        "ngInject";
        var directive: angular.IDirective = {};
        directive.restrict = 'A';
        directive.require = 'ngModel'
        directive.link = function (scope: any, elem: any, attrs: any, ctrl: any) {
            ctrl.$parsers.unshift(function (viewValue) {
                var values = $parse(attrs.valueNotInObjects)(scope);
                var key = attrs.valueNotInObjectsKey;
                var allowPropertyName = attrs.valueNotInObjectsAllowProperty;
                if (allowPropertyName === undefined || allowPropertyName.length === 0) {
                    allowPropertyName = "id";
                }
                var allow = $parse(attrs.valueNotInObjectsAllowId)(scope);
                if (values.filter(e => e[key] !== undefined && e[key].toString() === viewValue &&
                    (!allow || e[allowPropertyName] !== allow)).length > 0) {
                    ctrl.$setValidity('valueNotInObjects', false);
                    return undefined;
                } else {
                    ctrl.$setValidity('valueNotInObjects', true);
                    return viewValue;
                }
            });
        }
        return directive;
    };
};
module.directive('valueNotInObjects', Common.ValueNotInObjects);