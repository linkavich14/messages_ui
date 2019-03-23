import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactsModalComponent } from 'src/app/modals/contacts-modal/contacts-modal.component';
import { SharedService } from 'src/app/shared/shared.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Message } from 'src/app/models/message';
import { MessageService } from './../../../services/messages.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-message-reply',
  templateUrl: './message-reply.component.html',
  styleUrls: ['./message-reply.component.scss']
})
export class MessageReplyComponent implements OnInit {
  message: Message;
  index: number;
  replyMessageform: FormGroup;
  contacts: Contact[] = [];

  constructor(private modalService: NgbModal, private sharedService: SharedService,
              private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit() {
    this.route
      .params.subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.message = this.messageService.getMessage(this.index);
          this.initForm();
        }
      );
    this.sharedService.selectedContacts.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
        this.initForm();
      }
    );
  }

  showDialog() {
    this.modalService.open(ContactsModalComponent, { size: 'lg', centered: true });
  }

  cancelReply() {
    this.sharedService.displayRepliedMessage(true);
  }

  onSubmit() {}

  initForm() {
    let toField = this.message.senderMail;
    if (this.contacts.length > 0) {
      this.contacts.forEach(element => {
        toField += '; ' + element.email;
      });
    }
    this.replyMessageform = new FormGroup({
      'toField': new FormControl(toField, Validators.required)
    });
  }

  refreshImages(status) {
    if (status === true) {
      console.log( 'Uploaded successfully!');
    }
  }

}
