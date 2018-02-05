import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminNoticePage } from '../admin-notice/admin-notice';
import { AdminTimelinePage } from '../admin-timeline/admin-timeline';

@IonicPage()
@Component({
  selector: 'page-admin-main',
  templateUrl: 'admin-main.html',
})
export class AdminMainPage {
  p = [
    AdminNoticePage,
    AdminTimelinePage
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  choice(page) {
    this.navCtrl.push(this.p[page]);
  }
}
