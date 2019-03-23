import { MessageService } from './../../../services/messages.service';
import { Message } from 'src/app/models/message';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-message-title',
  templateUrl: './message-title.component.html',
  styleUrls: ['./message-title.component.scss']
})
export class MessageTitleComponent implements OnInit {
  message: Message;
  index: number;

  constructor(private messageService: MessageService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route
      .params.subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.message = this.messageService.getMessage(this.index);
        }
      );
  }

}
