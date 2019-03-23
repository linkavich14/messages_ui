import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ContactService = /** @class */ (function () {
    function ContactService() {
        this.CONTACTS = [
            {
                id: 1,
                surname: 'TestSurname1',
                name: 'TestName1',
                party: 'TestParty1',
                email: 'test1@test.com',
                selected: false
            },
            {
                id: 2,
                surname: 'TestSurname2',
                name: 'TestName2',
                party: 'TestParty2',
                email: 'test2@test.com',
                selected: false
            },
            {
                id: 3,
                surname: 'TestSurname3',
                name: 'TestName3',
                party: 'TestParty3',
                email: 'test3@test.com',
                selected: false
            },
            {
                id: 4,
                surname: 'TestSurname4',
                name: 'TestName4',
                party: 'TestParty4',
                email: 'test4@test.com',
                selected: false
            },
            {
                id: 5,
                surname: 'TestSurname4',
                name: 'TestName4',
                party: 'TestParty4',
                email: 'test5@test.com',
                selected: false
            },
            {
                id: 6,
                surname: 'TestSurname4',
                name: 'TestName4',
                party: 'TestParty4',
                email: 'test6@test.com',
                selected: false
            },
            {
                id: 7,
                surname: 'TestSurname4',
                name: 'TestName4',
                party: 'TestParty4',
                email: 'test7@test.com',
                selected: false
            }
        ];
    }
    ContactService.prototype.getAllContacts = function () {
        return this.CONTACTS;
    };
    ContactService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], ContactService);
    return ContactService;
}());
export { ContactService };
//# sourceMappingURL=contacts.service.js.map