import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroducePage } from '../introduce/introduce';
import { SupportPage } from '../support/support';
import { OrgChartPage } from '../org-chart/org-chart';
import { RoadToPage } from '../road-to/road-to';
import { NoticePage } from '../notice/notice';
import { FeedPage } from '../feed/feed';
import { App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  menu: Array<any> = [
    {
      name: '인사말',
      link: IntroducePage
    },
    {
      name: '후원안내',
      link: SupportPage
    },
    {
      name: '조직도',
      link: OrgChartPage
    },
    {
      name: '오시는 길',
      link: RoadToPage
    },
    {
      name: '공지사항',
      link: NoticePage
    },
    {
      name: '소식',
      link: FeedPage
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  goTo(link) {
    this.app.getRootNavs()[0].setRoot(link, {}, {animate: true, animation: 'ios'});
  }
}
