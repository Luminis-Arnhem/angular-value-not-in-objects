/// <reference path="emailaddress.ts" />
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="app.ts" />

namespace app {
    class ExampleWithConfigurableAllowedPropertyCtrl {
        EmailAddresses: EmailAddress[] = Array<EmailAddress>();
        currentEmailAddress: EmailAddress = new EmailAddress();
        overlayHidden: boolean = true;

        constructor() {
            var emailAddress = new EmailAddress();
            emailAddress.key = '11-44-5-99sdfsdf';
            emailAddress.emailAddress = 'example@example.com';
            emailAddress.type = 'Home';
            this.EmailAddresses.push(emailAddress);
            var emailAddress2 = new EmailAddress();
            emailAddress2.key = '56-23-8-13sdfsdf';
            emailAddress2.emailAddress = 'example2@example.com';
            emailAddress2.type = 'Work';
            this.EmailAddresses.push(emailAddress2);
        }

        edit(id: any) {
            this.overlayHidden = false;
            this.EmailAddresses.forEach((emailAddress) => {
                if (id === emailAddress.key) {
                    this.currentEmailAddress = angular.copy(emailAddress);
                    return;
                }
            });           
        };

        closeOverlay() {
            this.overlayHidden = true;
        };
    };

    main.controller("ExampleWithConfigurableAllowedPropertyCtrl", ExampleWithConfigurableAllowedPropertyCtrl);
}