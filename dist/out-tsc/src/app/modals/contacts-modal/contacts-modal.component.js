import * as tslib_1 from "tslib";
import { SharedService } from 'src/app/shared/shared.service';
import { ContactService } from './../../services/contacts.service';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
var ContactsModalComponent = /** @class */ (function () {
    function ContactsModalComponent(activeModal, modal, contactService, sharedService) {
        var _this = this;
        this.activeModal = activeModal;
        this.modal = modal;
        this.contactService = contactService;
        this.sharedService = sharedService;
        this.filter = new FormControl('');
        // contacts selected by the user which are to be positioned on the reply or new message to field
        this.mapSelectedContacts = new Map();
        this.selectedContacts = [];
        this.doSearch = new EventEmitter();
        this.allContacts = contactService.getAllContacts();
        this.contacts$ = this.filter.valueChanges.pipe(startWith(''), map(function (text) { return _this.search(text); }));
        this.subscription = this.contacts$.subscribe(function (contact) {
            _this.filteredContacts = contact;
        });
    }
    /**
     * Does the search for the table of contacts.
     * @param text text to find in all columns
     */
    ContactsModalComponent.prototype.search = function (text) {
        return this.allContacts.filter(function (contact) {
            var term = text.toLowerCase();
            return contact.name.toLowerCase().includes(term)
                || contact.surname.toLowerCase().includes(term)
                || contact.party.toLowerCase().includes(term);
        });
    };
    ContactsModalComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    /**
     * Changes the selected value of all the contacts so they appear all as selected
     * in the table.
     */
    ContactsModalComponent.prototype.selectAllContacts = function () {
        for (var _i = 0, _a = this.filteredContacts; _i < _a.length; _i++) {
            var contact = _a[_i];
            contact.selected = this.selectAll;
        }
    };
    /**
     * Adds or removes a contact when the checkbox is selected
     * @param contact the object of the contact selected
     * @param event the event related the checkbox
     */
    ContactsModalComponent.prototype.contactChanged = function (contact, event) {
        if (event.target.checked) {
            this.mapSelectedContacts.set(contact.id, contact);
        }
        else if (event.target.checked === false) {
            this.mapSelectedContacts.delete(contact.id);
        }
    };
    ContactsModalComponent.prototype.sendContactsToMessageContent = function () {
        var _this = this;
        if (this.selectAll) {
            this.selectedContacts = this.filteredContacts;
        }
        else {
            this.mapSelectedContacts.forEach(function (value, key) {
                _this.selectedContacts.push(value);
            });
        }
        this.sharedService.setContacts(this.selectedContacts);
        this.modal.close('Ok click');
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ContactsModalComponent.prototype, "doSearch", void 0);
    ContactsModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-contacts-modal',
            templateUrl: './contacts-modal.component.html',
            styleUrls: ['./contacts-modal.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal, NgbActiveModal,
            ContactService, SharedService])
    ], ContactsModalComponent);
    return ContactsModalComponent;
}());
export { ContactsModalComponent };
//# sourceMappingURL=contacts-modal.component.js.map