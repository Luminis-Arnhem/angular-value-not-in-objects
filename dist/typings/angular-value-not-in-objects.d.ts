/// <reference path="../typings/tsd.d.ts" />
declare var module: angular.IModule;
declare module Common {
    function ValueNotInObjects($parse: angular.IParseService): angular.IDirective;
}