
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MessagesModule } from './messages/messages.module';
import { ModalsModule } from './modals/modals.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MessageService } from './services/messages.service';
import { SharedService } from './shared/shared.service';
import { ContactService } from './services/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MessagesModule,
    ModalsModule,
    DialogModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MessageService, SharedService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
