import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactsModalComponent } from './contacts-modal/contacts-modal.component';

@NgModule({
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
export class ModalsModule {}
