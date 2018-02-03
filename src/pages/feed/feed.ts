import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  limit=5;
  offset=0;
  choice=0;
  list: Array<any>

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpService) {
    
  }

  ionViewWillLoad(){
    this.load();
  }
  ionViewDidLoad() {
  }

  load(){
    this.http.get(`/timeline?limit=5&offset=${this.offset}`)
    .subscribe(data =>{
      this.list = data.json();
    })
  }
}
