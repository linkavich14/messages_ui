import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactsModalComponent } from 'src/app/modals/contacts-modal/contacts-modal.component';
import { SharedService } from 'src/app/shared/shared.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from './../../../services/messages.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
var MessageReplyComponent = /** @class */ (function () {
    function MessageReplyComponent(modalService, sharedService, route, messageService) {
        this.modalService = modalService;
        this.sharedService = sharedService;
        this.route = route;
        this.messageService = messageService;
        this.contacts = [];
    }
    MessageReplyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params.subscribe(function (params) {
            _this.index = +params['id'];
            _this.message = _this.messageService.getMessage(_this.index);
            _this.initForm();
        });
        this.sharedService.selectedContacts.subscribe(function (contacts) {
            _this.contacts = contacts;
            _this.initForm();
        });
    };
    MessageReplyComponent.prototype.showDialog = function () {
        this.modalService.open(ContactsModalComponent, { size: 'lg', centered: true });
    };
    MessageReplyComponent.prototype.cancelReply = function () {
        this.sharedService.displayRepliedMessage(true);
    };
    MessageReplyComponent.prototype.onSubmit = function () { };
    MessageReplyComponent.prototype.initForm = function () {
        var toField = this.message.senderMail;
        if (this.contacts.length > 0) {
            this.contacts.forEach(function (element) {
                toField += '; ' + element.email;
            });
        }
        this.replyMessageform = new FormGroup({
            'toField': new FormControl(toField, Validators.required)
        });
    };
    MessageReplyComponent = tslib_1.__decorate([
        Component({
            selector: 'app-message-reply',
            templateUrl: './message-reply.component.html',
            styleUrls: ['./message-reply.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NgbModal, SharedService,
            ActivatedRoute, MessageService])
    ], MessageReplyComponent);
    return MessageReplyComponent;
}());
export { MessageReplyComponent };
//# sourceMappingURL=message-reply.component.js.map