import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

/**
 * Generated class for the AdminTimelineWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-timeline-write',
  templateUrl: 'admin-timeline-write.html',
})
export class AdminTimelineWritePage {
  content ="";
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminTimelineWritePage');
  }
  add(){
    let body = {
      content:this.content
    }
    this.http.post('/timeline',body)
    .subscribe(()=>{
      this.navCtrl.pop();
    })

  }
  get noticeModel() {
    return this.content;
  }
  set noticeModel(val) {
    this.content = val;
  }

  // 서버 저장하기 전에 /n -> <br/>로 변환시킨 값을 저장.
  getNoticeTxt() {
    return this.content.replace(/\r\n|\r|\n/g,"<br/>");
  }

  // 서버에서 불러와서 수정해야하는 상황일 때, <br/> -> /n으로 변환
  setNoticeTxt(txt: string) {
    return this.content = txt.replace(/<br\s?\/?>/g,"\n");
  }
}
