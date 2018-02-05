import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

/**
 * Generated class for the AdminNoticeUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-notice-update',
  templateUrl: 'admin-notice-update.html',
})
export class AdminNoticeUpdatePage {
  
  title:string="";
  notice_txt: any = "";
  notice_no:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpService) {
    this.notice_no = this.navParams.data.item.notice_no;
    this.title = this.navParams.data.item.title;
    this.setNoticeTxt(this.navParams.data.item.content);
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
      notice_no:this.notice_no,
      title : this.title,
      content : this.notice_txt
    }
    this.http.put(`/notice`,body)
    .subscribe(()=>{
      this.navCtrl.pop();
    })
  }
}
