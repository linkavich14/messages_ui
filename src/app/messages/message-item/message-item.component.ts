import { Message } from 'src/app/models/message';
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  public displayReadIcon = true;
  public displayUnreadIcon = false;
  headerstatus = false;

  @Input() message: Message;
  @Input() index: number;
  sharedService: SharedService;
  constructor(sharedService: SharedService) {
    this.sharedService = sharedService;
   }

  ngOnInit() {}

  /**
   * Hides elements related to the message
   */
  selectedMessageItem() {
    // false displays the icons when the message is selected
    this.sharedService.displayMessageIcons(false);
    // true applies the css property and hides by default the reply component
    this.sharedService.displayRepliedMessage(true);
  }

}
