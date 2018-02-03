import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticeDetailPage } from '../notice-detail/notice-detail';
import { HttpService } from '../../services/http.service';

@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class NoticePage {
  limit=5;
  offset=0;
  notice_list: Array<any>

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpService) {
    this.load();
  }

  ionViewDidLoad() {
  }

  goDetail(data) {
    this.navCtrl.push(NoticeDetailPage, {data: data});
  }
  load(){
    this.http.get(`/notice?limit=5&offset=${this.offset}`)
    .subscribe(data =>{
      this.notice_list = data.json();
    })
  }
}
