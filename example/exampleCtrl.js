/// <reference path="telephone.ts" />
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="app.ts" />
var app;
(function (app) {
    var ExampleCtrl = (function () {
        function ExampleCtrl() {
            this.Telephones = Array();
            var phone = new app.Telephone();
            phone.id = 1;
            phone.Number = '123';
            phone.Type = 'Home';
            this.Telephones.push(phone);
            var phone2 = new app.Telephone();
            phone2.id = 2;
            phone2.Number = '124';
            phone2.Type = 'Work';
            this.Telephones.push(phone2);
        }
        return ExampleCtrl;
    }());
    ;
    app.main.controller("ExampleCtrl", ExampleCtrl);
})(app || (app = {}));
