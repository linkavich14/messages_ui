import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsModalComponent } from './../../modals/contacts-modal/contacts-modal.component';

@Component({
  selector: 'app-messages-new',
  templateUrl: './messages-new.component.html',
  styleUrls: ['./messages-new.component.scss']
})
export class MessagesNewComponent implements OnInit {

  constructor(private modalService: NgbModal, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClickContactsModal() {}

  showDialog() {
    const modalRef = this.modalService.open(ContactsModalComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.name = 'World';
  }

  cancelNewMessage() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
