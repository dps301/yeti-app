import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { AdminTimelineUpdatePage } from '../admin-timeline-update/admin-timeline-update';

/**
 * Generated class for the AdminTimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-timeline',
  templateUrl: 'admin-timeline.html',
})
export class AdminTimelinePage {
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
  update(item){
    this.navCtrl.push(AdminTimelineUpdatePage,{item:item})
  }

}
