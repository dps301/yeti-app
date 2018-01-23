import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';

import { MainPage } from '../pages/main/main';
import { IntroducePage } from '../pages/introduce/introduce';
import { SupportPage } from '../pages/support/support';
import { OrgChartPage } from '../pages/org-chart/org-chart';
import { RoadToPage } from '../pages/road-to/road-to';
import { NoticePage } from '../pages/notice/notice';
import { FeedPage } from '../pages/feed/feed';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('container') nav: NavController;

  rootPage: any = MainPage;

  main: any = MainPage;
  introduce: any = IntroducePage;
  support: any = SupportPage;
  org_chart: any = OrgChartPage;
  road_to: any = RoadToPage;
  notice: any = NoticePage;  
  feed: any = FeedPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle('left');
  }

  navGo(page) {
    this.nav.setRoot(page, {}, {animate: true, animation: 'ios'})
    this.toggleMenu();
  }
}

