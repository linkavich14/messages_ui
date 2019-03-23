import * as tslib_1 from "tslib";
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
var SharedService = /** @class */ (function () {
    function SharedService() {
        this.selectedMessage = new EventEmitter();
        this.repliedMessage = new EventEmitter();
        this.selectedContacts = new Subject();
    }
    SharedService.prototype.displayMessageIcons = function (selectedMessage) {
        this.selectedMessage.emit(selectedMessage);
    };
    SharedService.prototype.getNewMessageValue = function () {
        return this.selectedMessage;
    };
    SharedService.prototype.displayRepliedMessage = function (repliedMessage) {
        this.repliedMessage.emit(repliedMessage);
    };
    SharedService.prototype.getRepliedMessageValue = function () {
        return this.repliedMessage;
    };
    SharedService.prototype.setContacts = function (contacts) {
        this.selectedContacts.next(contacts);
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SharedService.prototype, "selectedMessage", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SharedService.prototype, "repliedMessage", void 0);
    SharedService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());
export { SharedService };
//# sourceMappingURL=shared.service.js.map