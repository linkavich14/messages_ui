import { Injectable , Output, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class SharedService {
  @Output() selectedMessage: EventEmitter<any> = new EventEmitter();
  @Output() repliedMessage: EventEmitter<any> = new EventEmitter();
  selectedContacts = new Subject<Contact[]>();

   constructor() {}

   displayMessageIcons(selectedMessage: boolean) {
    this.selectedMessage.emit(selectedMessage);
   }

   getNewMessageValue() {
     return this.selectedMessage;
   }

   displayRepliedMessage(repliedMessage: boolean) {
     this.repliedMessage.emit(repliedMessage);
   }

   getRepliedMessageValue() {
     return this.repliedMessage;
   }

   setContacts(contacts: Contact[]) {
    this.selectedContacts.next(contacts);
   }
}
