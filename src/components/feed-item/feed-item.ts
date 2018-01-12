import { Component } from '@angular/core';

@Component({
  selector: 'feed-item',
  templateUrl: 'feed-item.html'
})
export class FeedItemComponent {
  text: string;

  constructor() {
    this.text = 'Hello World';
  }
}
