import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { AdminTimelineUpdatePage } from '../admin-timeline-update/admin-timeline-update';

@IonicPage()
@Component({
  selector: 'page-admin-timeline',
  templateUrl: 'admin-timeline.html',
})
export class AdminTimelinePage {
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
    return this.http.get(`/timeline?limit=${this.limit}&offset=${this.offset}`).toPromise();
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

  goDetail(item) {
    this.navCtrl.push(AdminTimelineUpdatePage, {item: item});
  }
}
