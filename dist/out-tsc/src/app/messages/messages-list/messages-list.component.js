import * as tslib_1 from "tslib";
import { MessageService } from './../../services/messages.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import * as moment from 'moment';
var MessagesListComponent = /** @class */ (function () {
    function MessagesListComponent(messageService, router, route) {
        this.messageService = messageService;
        this.router = router;
        this.route = route;
    }
    MessagesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.messageService.messagesChanged.subscribe(function (messages) {
            _this.messages = messages;
        });
        this.messages = this.messageService.getAllMessages();
        this.calculateDaysPassed();
    };
    MessagesListComponent.prototype.calculateDaysPassed = function () {
        var currentDate = formatDate(Date.now(), 'dd/MM/yyyy', 'en-AU');
        var endDateMoment = moment(currentDate, 'DD-MM-YYYY');
        this.messages.forEach(function (message) {
            var messageDate = formatDate(message.messageDateReceived, 'dd/MM/yyyy', 'en-AU');
            var startDateMoment = moment(messageDate, 'DD-MM-YYYY');
            // getting the difference in years
            var years = endDateMoment.diff(startDateMoment, 'years');
            // moment returns the total months between the two dates, subtracting the years
            var months = endDateMoment.diff(startDateMoment, 'months') - (years * 12);
            startDateMoment.add(years, 'years').add(months, 'months');
            var days = endDateMoment.diff(startDateMoment, 'days');
            message.daysDifference = days;
        });
    };
    MessagesListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MessagesListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-messages-list',
            templateUrl: './messages-list.component.html',
            styleUrls: ['./messages-list.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MessageService, Router,
            ActivatedRoute])
    ], MessagesListComponent);
    return MessagesListComponent;
}());
export { MessagesListComponent };
//# sourceMappingURL=messages-list.component.js.map