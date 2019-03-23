import { SharedService } from 'src/app/shared/shared.service';
import { ContactService } from './../../services/contacts.service';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contacts-modal',
  templateUrl: './contacts-modal.component.html',
  styleUrls: ['./contacts-modal.component.scss']
})
export class ContactsModalComponent implements OnDestroy {

  contacts$: Observable<Contact[]>;
  filter = new FormControl('');
  // selectAll checkbox status
  selectAll: any;
  subscription: Subscription;
  private allContacts: Contact[];
  private filteredContacts: Contact[];
  // contacts selected by the user which are to be positioned on the reply or new message to field
  private mapSelectedContacts: Map<number, Contact> = new Map<number, Contact>();
  private selectedContacts: Contact[] = [];

  @Output() doSearch = new EventEmitter<Contact>();

  constructor(public activeModal: NgbActiveModal, public modal: NgbActiveModal,
              private contactService: ContactService, private sharedService: SharedService) {
    this.allContacts = contactService.getAllContacts();
    this.contacts$ = this.filter.valueChanges.pipe(
      startWith(''), map(text => this.search(text))
    );
    this.subscription = this.contacts$.subscribe(
      (contact: Contact[]) => {
        this.filteredContacts = contact;
      }
    );
  }
  /**
   * Does the search for the table of contacts.
   * @param text text to find in all columns
   */
  search(text: string): Contact[] {
    return this.allContacts.filter(contact => {
      const term = text.toLowerCase();
      return contact.name.toLowerCase().includes(term)
          || contact.surname.toLowerCase().includes(term)
          || contact.party.toLowerCase().includes(term);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**
   * Changes the selected value of all the contacts so they appear all as selected
   * in the table.
   */
  selectAllContacts() {
    for (const contact of this.filteredContacts) {
      contact.selected = this.selectAll;
    }
  }
  /**
   * Adds or removes a contact when the checkbox is selected
   * @param contact the object of the contact selected
   * @param event the event related the checkbox
   */
  contactChanged(contact: Contact, event: any) {
    if (event.target.checked) {
      this.mapSelectedContacts.set(contact.id, contact);
    } else if (event.target.checked === false) {
      this.mapSelectedContacts.delete(contact.id);
    }
  }

  sendContactsToMessageContent() {
    if (this.selectAll) {
      this.selectedContacts = this.filteredContacts;
    } else {
      this.mapSelectedContacts.forEach((value, key) => {
        this.selectedContacts.push(value);
      });
    }
    this.sharedService.setContacts(this.selectedContacts);
    this.modal.close('Ok click');
  }

}
