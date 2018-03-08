import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { ServerAddr } from '../../services/server.addr';
import { HttpService } from '../../services/http.service';

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {
  bank:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewer: PhotoViewer,private http:HttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
    this.load();
  }

  viewPhoto() {
    console.log(ServerAddr.getServerAddr()+'/img/apply.jpg')
    this.viewer.show(ServerAddr.getServerAddr()+'/img/apply.jpg');
  }
  load(){
    this.http.get('/bank')
    .subscribe(data=>{
      this.bank = data.json();
    })
  }
}
