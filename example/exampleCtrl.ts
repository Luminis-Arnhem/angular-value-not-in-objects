/// <reference path="../typings/tsd.d.ts" />
/// <reference path="telephone.ts" />
/// <reference path="app.ts" />

namespace app {
    class ExampleCtrl {
        Telephones: Telephone[] = Array<Telephone>();

        constructor() {
            let phone = new Telephone();
            phone.id = 1;
            phone.number = '123';
            phone.type = 'Home';
            this.Telephones.push(phone);
            let phone2 = new Telephone();
            phone2.id = 2;
            phone2.number = '124';
            phone2.type = 'Work';
            this.Telephones.push(phone2);
        }
    };
    main.controller("ExampleCtrl", ExampleCtrl);
}