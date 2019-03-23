import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { MessageContentComponent } from './message-content/message-content.component';
import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesStartComponent } from './messages-start/messages-start.component';
import { MessagesNewComponent } from './messages-new/messages-new.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessagesSearchComponent } from './messages-search/messages-search.component';
import { MessageTitleComponent } from './message-content/message-title/message-title.component';
import { MessageBodyComponent } from './message-content/message-body/message-body.component';
import { MessageReplyComponent } from './message-content/message-reply/message-reply.component';
var MessagesModule = /** @class */ (function () {
    function MessagesModule() {
    }
    MessagesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                MessageContentComponent,
                MessageItemComponent,
                MessagesListComponent,
                MessagesNewComponent,
                MessagesStartComponent,
                MessagesComponent,
                MessagesSearchComponent,
                MessageTitleComponent,
                MessageBodyComponent,
                MessageReplyComponent
            ],
            imports: [
                CommonModule,
                MessagesRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                DialogModule
            ]
        })
    ], MessagesModule);
    return MessagesModule;
}());
export { MessagesModule };
//# sourceMappingURL=messages.module.js.map