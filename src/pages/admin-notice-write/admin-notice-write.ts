import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

/**
 * Generated class for the AdminNoticeWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-notice-write',
  templateUrl: 'admin-notice-write.html',
})
export class AdminNoticeWritePage {
  title:string="";
  notice_txt: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminNoticeWritePage');
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
  
  save(){
    let body = {
      title : this.title,
      content : this.notice_txt
    }
    this.http.post(`/notice`,body)
    .subscribe(()=>{
      this.navCtrl.pop();
    })
  }
}
