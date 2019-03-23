import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsModalComponent } from './contacts-modal/contacts-modal.component';
var ModalsModule = /** @class */ (function () {
    function ModalsModule() {
    }
    ModalsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                ContactsModalComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NgbModule
            ],
            entryComponents: [
                ContactsModalComponent
            ]
        })
    ], ModalsModule);
    return ModalsModule;
}());
export { ModalsModule };
//# sourceMappingURL=modals.module.js.map