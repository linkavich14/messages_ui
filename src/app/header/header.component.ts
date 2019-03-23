import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sharedService: SharedService;
  constructor(private router: Router, private route: ActivatedRoute, sharedService: SharedService) {
    this.sharedService = sharedService;
  }

  ngOnInit() {}

  onNewMessage() {
    this.sharedService.displayMessageIcons(true);
    this.router.navigate(['messages/new'], {relativeTo: this.route});
  }
}
