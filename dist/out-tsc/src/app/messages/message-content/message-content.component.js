import * as tslib_1 from "tslib";
import { MessageService } from 'src/app/services/messages.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
var MessageContentComponent = /** @class */ (function () {
    function MessageContentComponent(messageService, sharedService, route, router) {
        this.messageService = messageService;
        this.sharedService = sharedService;
        this.route = route;
        this.router = router;
        this.messageReplyDisplay = true;
    }
    MessageContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params.subscribe(function (params) {
            _this.index = +params['id'];
            _this.message = _this.messageService.getMessage(_this.index);
        });
        this.sharedService.getRepliedMessageValue().subscribe(function (item) { return _this.messageReplyDisplay = item; });
    };
    MessageContentComponent.prototype.onAcknowledgeMessage = function () {
        this.messageService.updateAcknowledgeMessage(this.index);
    };
    MessageContentComponent.prototype.onReplyMessage = function () {
        this.sharedService.displayRepliedMessage(false);
    };
    MessageContentComponent.prototype.onNewMessage = function () {
        this.sharedService.displayMessageIcons(true);
        this.router.navigate(['../new'], { relativeTo: this.route });
    };
    MessageContentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-message-content',
            templateUrl: './message-content.component.html',
            styleUrls: ['./message-content.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MessageService, SharedService,
            ActivatedRoute, Router])
    ], MessageContentComponent);
    return MessageContentComponent;
}());
export { MessageContentComponent };
//# sourceMappingURL=message-content.component.js.map