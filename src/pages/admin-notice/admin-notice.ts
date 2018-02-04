import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-admin-notice',
  templateUrl: 'admin-notice.html',
})
export class AdminNoticePage {
  notice_txt: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
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
}
