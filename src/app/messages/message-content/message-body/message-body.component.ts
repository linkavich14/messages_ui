import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/messages.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-message-body',
  templateUrl: './message-body.component.html',
  styleUrls: ['./message-body.component.scss']
})
export class MessageBodyComponent implements OnInit {
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
