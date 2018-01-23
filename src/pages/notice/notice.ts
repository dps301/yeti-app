import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticeDetailPage } from '../notice-detail/notice-detail';

@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class NoticePage {
  notice_list: Array<any> = [
    {
      title: '공지1'
    },
    {
      title: '공지2'
    },
    {
      title: '공지3'
    },
    {
      title: '공지4'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goDetail(id) {
    this.navCtrl.push(NoticeDetailPage, {id: id});
  }
}
