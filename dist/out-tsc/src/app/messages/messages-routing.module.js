import * as tslib_1 from "tslib";
import { MessageContentComponent } from './message-content/message-content.component';
import { MessagesNewComponent } from './messages-new/messages-new.component';
import { MessagesStartComponent } from './messages-start/messages-start.component';
import { MessagesComponent } from './messages.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var messagesRoutes = [
    { path: 'messages', component: MessagesComponent, children: [
            { path: '', component: MessagesStartComponent },
            { path: 'new', component: MessagesNewComponent },
            { path: ':id', component: MessageContentComponent }
        ] }
];
var MessagesRoutingModule = /** @class */ (function () {
    function MessagesRoutingModule() {
    }
    MessagesRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(messagesRoutes)
            ],
            exports: [RouterModule]
        })
    ], MessagesRoutingModule);
    return MessagesRoutingModule;
}());
export { MessagesRoutingModule };
//# sourceMappingURL=messages-routing.module.js.map