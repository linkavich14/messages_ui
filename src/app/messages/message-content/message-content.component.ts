import { MessageService } from 'src/app/services/messages.service';
import { Message } from 'src/app/models/message';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.scss']
})
export class MessageContentComponent implements OnInit {
  message: Message;
  index: number;
  messageReplyDisplay = true;

  constructor(private messageService: MessageService, private sharedService: SharedService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route
      .params.subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.message = this.messageService.getMessage(this.index);
        }
      );
    this.sharedService.getRepliedMessageValue().subscribe(item => this.messageReplyDisplay = item);
  }

  onAcknowledgeMessage() {
    this.messageService.updateAcknowledgeMessage(this.index);
  }

  onReplyMessage() {
    this.sharedService.displayRepliedMessage(false);
  }

  onNewMessage() {
    this.sharedService.displayMessageIcons(true);
    this.router.navigate(['../new'], {relativeTo: this.route});
  }

}
