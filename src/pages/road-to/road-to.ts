import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare const naver: any;

@IonicPage()
@Component({
  selector: 'page-road-to',
  templateUrl: 'road-to.html',
})
export class RoadToPage {
  mapOptions: any = {};
  map: any = null;
  marker: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.mapOptions = {
      center: new naver.maps.LatLng(35.952027, 129.277549),
      zoom: 11
    };

    this.map = new naver.maps.Map('map', this.mapOptions);

    this.marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(35.952027, 129.277549),
      map: this.map
    });
  }

}
