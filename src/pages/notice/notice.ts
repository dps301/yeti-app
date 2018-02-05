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
  limit: number = 4;
  offset: number = 0;
  list: Array<any> = [];
  ended: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpService) {
    
  }

  ionViewDidLoad() {
    this.load()
    .then(data => {
      this.list = this.list.concat(data.json().list);
      if(this.list.length > 0 && this.list.length != data.json().total)
        this.offset += this.limit;
      else
        this.ended = true;
    });
  }

  load() {
    return this.http.get(`/notice?limit=${this.limit}&offset=${this.offset}`).toPromise();
  }

  doInfinite(infiniteScroll) {
    if(!this.ended) {
      this.load()
      .then(data => {
        this.list = this.list.concat(data.json().list);
        this.offset += this.limit;
        infiniteScroll.complete();
      })
      .catch(() => {
        infiniteScroll.complete();
      });
    }
    else {
      infiniteScroll.complete();
    }
  }

  goDetail(data) {
    this.navCtrl.push(NoticeDetailPage, {data: data});
  }
}
