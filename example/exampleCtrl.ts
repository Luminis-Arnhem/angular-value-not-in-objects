/// <reference path="telephone.ts" />
namespace app {
    class ExampleCtrl {
        Telephones: Telephone[] = Array<Telephone>();

        constructor() {
            let phone = new Telephone();
            phone.id = 1;
            phone.Number = '123';
            phone.Type = 'Home';
            this.Telephones.push(phone);
            let phone2 = new Telephone();
            phone2.id = 2;
            phone2.Number = '124';
            phone2.Type = 'Work';
            this.Telephones.push(phone2);
        }
    };
    main.controller("ExampleCtrl", ExampleCtrl);
}