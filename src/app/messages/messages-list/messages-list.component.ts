import { MessageService } from './../../services/messages.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/models/message';
import { formatDate } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit, OnDestroy {
  messages: Message[];
  subscription: Subscription;
  id: number;

  constructor(private messageService: MessageService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.messageService.messagesChanged.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
    this.messages = this.messageService.getAllMessages();
    this.calculateDaysPassed();
  }

  private calculateDaysPassed() {
    const currentDate = formatDate(Date.now(), 'dd/MM/yyyy', 'en-AU');
    const endDateMoment = moment(currentDate, 'DD-MM-YYYY');

    this.messages.forEach(message => {
      const messageDate = formatDate(message.messageDateReceived, 'dd/MM/yyyy', 'en-AU');
      const startDateMoment = moment(messageDate, 'DD-MM-YYYY');

      // getting the difference in years
      const years = endDateMoment.diff(startDateMoment, 'years');

      // moment returns the total months between the two dates, subtracting the years
      const months = endDateMoment.diff(startDateMoment, 'months') - (years * 12);

      startDateMoment.add(years, 'years').add(months, 'months');
      const days = endDateMoment.diff(startDateMoment, 'days');
      message.daysDifference = days;
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
