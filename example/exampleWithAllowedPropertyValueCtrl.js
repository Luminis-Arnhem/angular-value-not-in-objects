/// <reference path="emailaddress.ts" />
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="app.ts" />
var app;
(function (app) {
    var ExampleWithConfigurableAllowedPropertyCtrl = (function () {
        function ExampleWithConfigurableAllowedPropertyCtrl() {
            this.EmailAddresses = Array();
            this.currentEmailAddress = new app.EmailAddress();
            this.overlayHidden = true;
            var emailAddress = new app.EmailAddress();
            emailAddress.key = '11-44-5-99sdfsdf';
            emailAddress.emailAddress = 'example@example.com';
            emailAddress.type = 'Home';
            this.EmailAddresses.push(emailAddress);
            var emailAddress2 = new app.EmailAddress();
            emailAddress2.key = '56-23-8-13sdfsdf';
            emailAddress2.emailAddress = 'example2@example.com';
            emailAddress2.type = 'Work';
            this.EmailAddresses.push(emailAddress2);
        }
        ExampleWithConfigurableAllowedPropertyCtrl.prototype.edit = function (id) {
            var _this = this;
            this.overlayHidden = false;
            this.EmailAddresses.forEach(function (emailAddress) {
                if (id === emailAddress.key) {
                    _this.currentEmailAddress = angular.copy(emailAddress);
                    return;
                }
            });
        };
        ;
        ExampleWithConfigurableAllowedPropertyCtrl.prototype.closeOverlay = function () {
            this.overlayHidden = true;
        };
        ;
        return ExampleWithConfigurableAllowedPropertyCtrl;
    }());
    ;
    app.main.controller("ExampleWithConfigurableAllowedPropertyCtrl", ExampleWithConfigurableAllowedPropertyCtrl);
})(app || (app = {}));
