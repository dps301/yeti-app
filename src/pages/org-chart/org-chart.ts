import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

/**
 * Generated class for the OrgChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-org-chart',
  templateUrl: 'org-chart.html',
})
export class OrgChartPage {
  member:any;
  total = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpService) {
  }

  ionViewDidLoad() {
    this.load();
  }
  load(){
    this.http.get('/organ')
    .subscribe(data=>{
      this.member = data.json();
      this.total = Number(this.member[0].document)+Number(this.member[1].document)+
      Number(this.member[2].document)+Number(this.member[3].document)
    })
  }

}
