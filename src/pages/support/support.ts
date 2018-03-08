import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewer: PhotoViewer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }

  viewPhoto() {
    this.viewer.show('assets/imgs/apply.jpg');
  }
}
