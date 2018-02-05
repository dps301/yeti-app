import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { AdminNoticeUpdatePage } from '../admin-notice-update/admin-notice-update';
import { AdminNoticeWritePage } from '../admin-notice-write/admin-notice-write';

@IonicPage()
@Component({
  selector: 'page-admin-notice',
  templateUrl: 'admin-notice.html',
})
export class AdminNoticePage {
  limit: number = 5;
  offset: number = 0;
  notice_list: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpService) {
    this.load();
  }

  ionViewDidLoad() {
    this.load();
  }
  
  load() {
    this.http.get(`/notice?limit=5&offset=${this.offset}`)
    .subscribe(data =>{
      this.notice_list = data.json();
    });
  }

  goDetail(item) {
    this.navCtrl.push(AdminNoticeUpdatePage, {item:item});
  }

  write() {
    this.navCtrl.push(AdminNoticeWritePage);
  }

  delete(notice_no) {
    this.http.delete(`/notice?notice_no=${notice_no}`)
    .subscribe(data =>{
      this.load();
    });
  }
}
