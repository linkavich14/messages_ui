import * as tslib_1 from "tslib";
import { Message } from './../models/message';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messagesChanged = new Subject();
        this.messages = [
            // tslint:disable-next-line:max-line-length
            new Message(1, 'test@test.com', 'User Test Name 1', 'Test Body Message 1', 'Test Message Subject 1', '28/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(2, 'newTest@Newtest.com', 'User Test Name 2', 'Test Body Message 2', 'Test Message Subject 2', '28/Feb/2019', ['receiver@test.com'], true, 0),
            // tslint:disable-next-line:max-line-length
            new Message(3, 'testing@testing.com', 'User Test Name 3', 'Test Body Message 3', 'Test Message Subject 3', '27/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(4, 'testing@testing.com', 'User Test Name 4', 'Test Body Message 4', 'Test Message Subject 4', '27/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(5, 'testing@testing.com', 'User Test Name 5', 'Test Body Message 5', 'Test Message Subject 5', '26/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(6, 'testing@testing.com', 'User Test Name 6', 'Test Body Message 6', 'Test Message Subject 6', '25/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(7, 'testing@testing.com', 'User Test Name 7', 'Test Body Message 7', 'Test Message Subject 7', '24/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(8, 'testing@testing.com', 'User Test Name 8', 'Test Body Message 8', 'Test Message Subject 8', '24/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(9, 'testing@testing.com', 'User Test Name 9', 'Test Body Message 9', 'Test Message Subject 9', '23/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(10, 'newTest@Newtest.com', 'User Test Name 10', 'Test Body Message 10', 'Test Message Subject 10', '23/Feb/2019', ['receiver@test.com'], true, 0),
            // tslint:disable-next-line:max-line-length
            new Message(11, 'testing@testing.com', 'User Test Name 11', 'Test Body Message 11', 'Test Message Subject 11', '22/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(12, 'testing@testing.com', 'User Test Name 12', 'Test Body Message 12', 'Test Message Subject 12', '22/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(13, 'testing@testing.com', 'User Test Name 13', 'Test Body Message 13', 'Test Message Subject 13', '22/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(14, 'testing@testing.com', 'User Test Name 14', 'Test Body Message 14', 'Test Message Subject 14', '21/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(15, 'testing@testing.com', 'User Test Name 15', 'Test Body Message 15', 'Test Message Subject 15', '21/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(16, 'testing@testing.com', 'User Test Name 16', 'Test Body Message 16', 'Test Message Subject 16', '20/Feb/2019', ['receiver@test.com'], false, 0),
            // tslint:disable-next-line:max-line-length
            new Message(17, 'testing@testing.com', 'User Test Name 17', 'Test Body Message 17', 'Test Message Subject 17', '20/Feb/2019', ['receiver@test.com'], false, 0)
        ];
    }
    MessageService.prototype.updateAcknowledgeMessage = function (index) {
        this.ackMessage = this.messages[index];
        this.ackMessage.acknowledge = true;
        this.messagesChanged.next(this.messages.slice());
    };
    MessageService.prototype.sendMessage = function (message) { };
    MessageService.prototype.setMessages = function (messages) {
        this.messages = messages;
        this.messagesChanged.next(this.messages.slice());
    };
    MessageService.prototype.getAllMessages = function () {
        return this.messages;
    };
    MessageService.prototype.getMessage = function (index) {
        return this.messages[index];
    };
    MessageService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());
export { MessageService };
//# sourceMappingURL=messages.service.js.map