import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminNoticePage } from '../admin-notice/admin-notice';

@IonicPage()
@Component({
  selector: 'page-admin-main',
  templateUrl: 'admin-main.html',
})
export class AdminMainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  writeNotice() {
    this.navCtrl.push(AdminNoticePage);
  }
}
