import { MessagesUploadfileComponent } from './messages-uploadfile/messages-uploadfile.component';
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

@NgModule({
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
    MessageReplyComponent,
    MessagesUploadfileComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule
  ]
})
export class MessagesModule {}
