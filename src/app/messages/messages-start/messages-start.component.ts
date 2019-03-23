import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages-start',
  templateUrl: './messages-start.component.html',
  styleUrls: ['./messages-start.component.scss']
})
export class MessagesStartComponent {

  constructor(private sharedService: SharedService, private router: Router,
              private route: ActivatedRoute) { }

  onNewMessage() {
    this.sharedService.displayMessageIcons(true);
    this.router.navigate(['/messages/new'], {relativeTo: this.route});
  }

}
