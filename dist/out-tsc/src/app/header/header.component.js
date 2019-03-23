import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, route, sharedService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.onNewMessage = function () {
        this.sharedService.displayMessageIcons(true);
        this.router.navigate(['messages/new'], { relativeTo: this.route });
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute, SharedService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map