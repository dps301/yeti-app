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
  title:string="";
  notice_txt: string = "";
  limit=5;
  offset=0;
  notice_list: Array<any>
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpService) {
    this.load();
  }

  ionViewDidLoad() {
    this.load();
  }

  get noticeModel() {
    return this.notice_txt;
  }
  set noticeModel(val) {
    this.notice_txt = val;
  }

  // 서버 저장하기 전에 /n -> <br/>로 변환시킨 값을 저장.
  getNoticeTxt() {
    return this.notice_txt.replace(/\r\n|\r|\n/g,"<br/>");
  }

  // 서버에서 불러와서 수정해야하는 상황일 때, <br/> -> /n으로 변환
  setNoticeTxt(txt: string) {
    return this.notice_txt = txt.replace(/<br\s?\/?>/g,"\n");
  }
  
  load(){
    this.http.get(`/notice?limit=5&offset=${this.offset}`)
    .subscribe(data =>{
      this.notice_list = data.json();
    })
  }
  goDetail(item){
    this.navCtrl.push(AdminNoticeUpdatePage,{item:item})
  }
  write(){
    this.navCtrl.push(AdminNoticeWritePage)
  }
  delete(notice_no){
    this.http.delete(`/notice?notice_no=${notice_no}`)
    .subscribe(data =>{
      this.load();
    })
  }
}
