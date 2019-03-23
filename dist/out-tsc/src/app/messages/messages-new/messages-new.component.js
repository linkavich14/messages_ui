import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsModalComponent } from './../../modals/contacts-modal/contacts-modal.component';
var MessagesNewComponent = /** @class */ (function () {
    function MessagesNewComponent(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
    }
    MessagesNewComponent.prototype.ngOnInit = function () {
    };
    MessagesNewComponent.prototype.onClickContactsModal = function () { };
    MessagesNewComponent.prototype.showDialog = function () {
        var modalRef = this.modalService.open(ContactsModalComponent, { size: 'lg', centered: true });
        modalRef.componentInstance.name = 'World';
    };
    MessagesNewComponent.prototype.cancelNewMessage = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    MessagesNewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-messages-new',
            templateUrl: './messages-new.component.html',
            styleUrls: ['./messages-new.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NgbModal, Router, ActivatedRoute])
    ], MessagesNewComponent);
    return MessagesNewComponent;
}());
export { MessagesNewComponent };
//# sourceMappingURL=messages-new.component.js.map