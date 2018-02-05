import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServerAddr } from '../../services/server.addr';
import { FileUploader } from 'ng2-file-upload';

/**
 * Generated class for the AdminTimelineUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-timeline-update',
  templateUrl: 'admin-timeline-update.html',
})
export class AdminTimelineUpdatePage {
  item:any;
  notice_txt = "";
  addr="";
  public uploader:FileUploader;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=this.navParams.data.item
    this.addr = ServerAddr.getServerAddr();
    this.uploader = new FileUploader({url:`${this.addr}/imgload/${this.item.timeline_no}`});
  }
  uploadImg(no){
    this.uploader = new FileUploader({url:`/imgload/${this.item.timeline_no}`});
  }

  get noticeModel() {
    return this.item.content;
  }
  set noticeModel(val) {
    this.item.content = val;
  }

  // 서버 저장하기 전에 /n -> <br/>로 변환시킨 값을 저장.
  getNoticeTxt() {
    return this.item.content.replace(/\r\n|\r|\n/g,"<br/>");
  }

  // 서버에서 불러와서 수정해야하는 상황일 때, <br/> -> /n으로 변환
  setNoticeTxt(txt: string) {
    return this.item.content = txt.replace(/<br\s?\/?>/g,"\n");
  }

}
