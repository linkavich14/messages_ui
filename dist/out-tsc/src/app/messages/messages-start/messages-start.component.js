import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
var MessagesStartComponent = /** @class */ (function () {
    function MessagesStartComponent(sharedService, router, route) {
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
    }
    MessagesStartComponent.prototype.onNewMessage = function () {
        this.sharedService.displayMessageIcons(true);
        this.router.navigate(['/messages/new'], { relativeTo: this.route });
    };
    MessagesStartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-messages-start',
            templateUrl: './messages-start.component.html',
            styleUrls: ['./messages-start.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SharedService, Router,
            ActivatedRoute])
    ], MessagesStartComponent);
    return MessagesStartComponent;
}());
export { MessagesStartComponent };
//# sourceMappingURL=messages-start.component.js.map