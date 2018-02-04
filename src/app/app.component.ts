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
import { AdminMainPage } from '../pages/admin-main/admin-main';
import { SafariViewController } from '@ionic-native/safari-view-controller';

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
  admin_main: any = AdminMainPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, private safari: SafariViewController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle('left');
  }

  navGo(page) {
    this.nav.push(page, {}, {animate: true, animation: 'ios'});
    this.toggleMenu();
  }

  getPages() {
    return this.nav.getViews().length;
  }

  back() {
    this.nav.pop();
  }

  facebook() {
    this.safari.isAvailable()
    .then((available: boolean) => {
        if (available) {
          this.safari.show({
            url: 'https://www.facebook.com',
            hidden: false,
            animated: false,
            transition: 'curl',
            enterReaderModeIfAvailable: true,
            tintColor: '#ff0000'
          })
          .subscribe((result: any) => {
              if(result.event === 'opened') console.log('Opened');
              else if(result.event === 'loaded') console.log('Loaded');
              else if(result.event === 'closed') console.log('Closed');
            },
            (error: any) => console.error(error)
          );

        } else {
          // use fallback browser, example InAppBrowser
        }
      }
    );
  }
}

