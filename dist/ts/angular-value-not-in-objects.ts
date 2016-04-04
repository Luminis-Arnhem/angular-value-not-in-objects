/*!
 * Copyright (c) 2016 Luminis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
//Type definition file removed
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
                var allow = $parse(attrs.valueNotInObjectsAllowId)(scope);
                if (values.filter(e => e[key] !== undefined && e[key].toString() === viewValue &&
                    (!allow || e.id !== allow)).length > 0) {
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