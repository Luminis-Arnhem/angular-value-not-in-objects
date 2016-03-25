/// <reference path="telephone.ts" />
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/tsd.d.ts" />

namespace app {
    class ExampleWithAllowedIdCtrl {
        Telephones: Telephone[] = Array<Telephone>();
        currentTelephone: Telephone = new Telephone();
        overlayHidden: boolean = true;

        constructor() {
            var phone = new Telephone();
            phone.id = 1;
            phone.Number = '123';
            phone.Type = 'Home';
            this.Telephones.push(phone);
            var phone2 = new Telephone();
            phone2.id = 2;
            phone2.Number = '124';
            phone2.Type = 'Work';
            this.Telephones.push(phone2);
        }

        edit(id: number) {
            this.overlayHidden = false;
            this.Telephones.forEach((telephone) => {
                if (id === telephone.id) {
                    this.currentTelephone = angular.copy(telephone);
                    return;
                }
            });
        };
        closeOverlay() {
            this.overlayHidden = true;
        };
    };

    main.controller("ExampleWithAllowedIdCtrl", ExampleWithAllowedIdCtrl);
}