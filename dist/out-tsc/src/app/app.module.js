import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessagesModule } from './messages/messages.module';
import { ModalsModule } from './modals/modals.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessageService } from './services/messages.service';
import { SharedService } from './shared/shared.service';
import { ContactService } from './services/contacts.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
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
                ReactiveFormsModule
            ],
            providers: [MessageService, SharedService, ContactService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map