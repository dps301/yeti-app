import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { AdminMainPage } from '../admin-main/admin-main';

@IonicPage()
@Component({
  selector: 'page-introduce',
  templateUrl: 'introduce.html',
})
export class IntroducePage {
  data:any = {
    document:null
  };
  time = 0; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpService, public app: App) {
    
  }

  ionViewDidLoad() {
    this.load();
  }
  load(){
    this.http.get(`/introduce`)
    .subscribe( data=>{
      this.data = data.json();
    },
    error=>{
      console.log(error)
    })
  }
  admin(){
    if(this.time != 1){
      this.time++;
    } else {
      this.app.getRootNavs()[0].push(AdminMainPage, {}, {animate: true, animation: 'ios'});
    }
  }

}
