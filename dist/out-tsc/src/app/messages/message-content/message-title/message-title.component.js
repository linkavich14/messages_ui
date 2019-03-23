import * as tslib_1 from "tslib";
import { MessageService } from './../../../services/messages.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var MessageTitleComponent = /** @class */ (function () {
    function MessageTitleComponent(messageService, route, router) {
        this.messageService = messageService;
        this.route = route;
        this.router = router;
    }
    MessageTitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params.subscribe(function (params) {
            _this.index = +params['id'];
            _this.message = _this.messageService.getMessage(_this.index);
        });
    };
    MessageTitleComponent = tslib_1.__decorate([
        Component({
            selector: 'app-message-title',
            templateUrl: './message-title.component.html',
            styleUrls: ['./message-title.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MessageService,
            ActivatedRoute, Router])
    ], MessageTitleComponent);
    return MessageTitleComponent;
}());
export { MessageTitleComponent };
//# sourceMappingURL=message-title.component.js.map