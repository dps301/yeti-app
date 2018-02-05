import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServerAddr } from '../../services/server.addr';
import { FileUploader } from 'ng2-file-upload';
import { HttpService } from '../../services/http.service';

@IonicPage()
@Component({
  selector: 'page-admin-timeline-update',
  templateUrl: 'admin-timeline-update.html',
})
export class AdminTimelineUpdatePage {
  item:any;
  no:number=0;
  notice_txt = "";
  addr="";
  body = {
    imgUrl:null,
    timeline_no:null
  }
  public uploader:FileUploader;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpService) {
    this.no=this.navParams.data.item.timeline_no
    this.item=this.navParams.data.item
    console.log(this.navParams.data.item.timeline_no)
    this.load(this.no);
    this.uploadImg(this.no);
  }
  ionViewDidLoad() {
    this.item = this.navParams.data.item;
    this.setNoticeTxt(this.item.content);
    this.addr = ServerAddr.getServerAddr();
    
    
  }

  uploadImg(no){
    let name = Date.now();
    this.body = {
      imgUrl:`/img/${name}.png`,
      timeline_no:no
    }
    this.uploader = new FileUploader({url:`${this.addr}/imgload/${name}`});    
  }
  uploadImgServer(no){
    this.http.post(`/timeline/img`,this.body).subscribe(()=>{
      this.load(no)
      this.uploadImg(no)
    })
  }
  load(no){
    this.http.get(`/timeline/one?timeline_no=${no}`)
    .subscribe(data =>{
      this.item = data.json();
      console.log(this.item)
    })
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
