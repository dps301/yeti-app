import { Component,Input, ViewChild } from '@angular/core';
import { ServerAddr } from '../../services/server.addr';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'feed-item',
  templateUrl: 'feed-item.html'
})
export class FeedItemComponent {
  choice = 0;
  @ViewChild(Slides) slides: Slides;
  server = ServerAddr.getServerAddr();
  @Input() item:any;

  constructor() {
  }
}
