import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  menu: Array<any> = [
    {
      name: '인사말'
    },
    {
      name: '후원안내'
    },
    {
      name: '조직도'
    },
    {
      name: '오시는 길'
    },
    {
      name: '공지사항'
    },
    {
      name: '소식'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
