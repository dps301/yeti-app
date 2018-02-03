import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notice-detail',
  templateUrl: 'notice-detail.html',
})
export class NoticeDetailPage {
  item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data.data;
  }

  ionViewDidLoad() {
  }

  back() {
    this.navCtrl.pop();
  }
}
