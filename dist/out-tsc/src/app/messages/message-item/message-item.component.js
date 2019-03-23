import * as tslib_1 from "tslib";
import { Message } from 'src/app/models/message';
import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
var MessageItemComponent = /** @class */ (function () {
    function MessageItemComponent(sharedService) {
        this.displayReadIcon = true;
        this.displayUnreadIcon = false;
        this.headerstatus = false;
        this.sharedService = sharedService;
    }
    MessageItemComponent.prototype.ngOnInit = function () { };
    /**
     * Hides elements related to the message
     */
    MessageItemComponent.prototype.selectedMessageItem = function () {
        // false displays the icons when the message is selected
        this.sharedService.displayMessageIcons(false);
        // true applies the css property and hides by default the reply component
        this.sharedService.displayRepliedMessage(true);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Message)
    ], MessageItemComponent.prototype, "message", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], MessageItemComponent.prototype, "index", void 0);
    MessageItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-message-item',
            templateUrl: './message-item.component.html',
            styleUrls: ['./message-item.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SharedService])
    ], MessageItemComponent);
    return MessageItemComponent;
}());
export { MessageItemComponent };
//# sourceMappingURL=message-item.component.js.map