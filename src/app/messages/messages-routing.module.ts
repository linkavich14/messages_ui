import { MessageContentComponent } from './message-content/message-content.component';
import { MessagesNewComponent } from './messages-new/messages-new.component';
import { MessagesStartComponent } from './messages-start/messages-start.component';
import { MessagesComponent } from './messages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const messagesRoutes: Routes = [
    {path: 'messages', component: MessagesComponent, children: [
        {path: '', component: MessagesStartComponent},
        {path: 'new', component: MessagesNewComponent},
        {path: ':id', component: MessageContentComponent}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(messagesRoutes)
  ],
  exports: [RouterModule]
})
export class MessagesRoutingModule {}
