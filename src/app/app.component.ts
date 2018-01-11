import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';

import { MainPage } from '../pages/main/main';
import { IntroducePage } from '../pages/introduce/introduce';
import { FeedPage } from '../pages/feed/feed';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('container') nav: NavController;

  rootPage: any = MainPage;

  introduce: any = IntroducePage;
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
    // this.nav.push(page);
    this.rootPage = page;
    this.toggleMenu();
  }
}

