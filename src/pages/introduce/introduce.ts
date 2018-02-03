import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

@IonicPage()
@Component({
  selector: 'page-introduce',
  templateUrl: 'introduce.html',
})
export class IntroducePage {
  data:any = {
    document:null
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpService) {
    
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

}
