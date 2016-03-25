/// <reference path="telephone.ts" />
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/tsd.d.ts" />
var app;
(function (app) {
    var ExampleWithAllowedIdCtrl = (function () {
        function ExampleWithAllowedIdCtrl() {
            this.Telephones = Array();
            this.currentTelephone = new app.Telephone();
            this.overlayHidden = true;
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
        ExampleWithAllowedIdCtrl.prototype.edit = function (id) {
            var _this = this;
            this.overlayHidden = false;
            this.Telephones.forEach(function (telephone) {
                if (id === telephone.id) {
                    _this.currentTelephone = angular.copy(telephone);
                    return;
                }
            });
        };
        ;
        ExampleWithAllowedIdCtrl.prototype.closeOverlay = function () {
            this.overlayHidden = true;
        };
        ;
        return ExampleWithAllowedIdCtrl;
    }());
    ;
    app.main.controller("ExampleWithAllowedIdCtrl", ExampleWithAllowedIdCtrl);
})(app || (app = {}));
