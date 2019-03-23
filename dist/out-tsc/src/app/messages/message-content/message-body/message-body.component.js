import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/messages.service';
import { ActivatedRoute, Router } from '@angular/router';
var MessageBodyComponent = /** @class */ (function () {
    function MessageBodyComponent(messageService, route, router) {
        this.messageService = messageService;
        this.route = route;
        this.router = router;
    }
    MessageBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params.subscribe(function (params) {
            _this.index = +params['id'];
            _this.message = _this.messageService.getMessage(_this.index);
        });
    };
    MessageBodyComponent = tslib_1.__decorate([
        Component({
            selector: 'app-message-body',
            templateUrl: './message-body.component.html',
            styleUrls: ['./message-body.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MessageService,
            ActivatedRoute, Router])
    ], MessageBodyComponent);
    return MessageBodyComponent;
}());
export { MessageBodyComponent };
//# sourceMappingURL=message-body.component.js.map