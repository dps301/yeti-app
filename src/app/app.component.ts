import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, App } from 'ionic-angular';
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
  menu: Array<any> = [
    {
      name: '인사말',
      link: IntroducePage,
      img: 'assets/imgs/handshake.png'
    },
    {
      name: '후원안내',
      link: SupportPage,
      img: 'assets/imgs/charity.png'
    },
    {
      name: '조직도',
      link: OrgChartPage,
      img: 'assets/imgs/diagram.png'
    },
    {
      name: '오시는 길',
      link: RoadToPage,
      img: 'assets/imgs/map.png'
    },
    {
      name: '공지사항',
      link: NoticePage,
      img: 'assets/imgs/megaphone.png'
    },
    {
      name: '소식',
      link: FeedPage,
      img: 'assets/imgs/email.png'
    }
  ];
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, public app: App, public safari: SafariViewController) {
    platform.ready().then(() => {
      statusBar.overlaysWebView(false);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle('left');
  }

  navGo(page) {
    if(page == RoadToPage) {
      this.safari.isAvailable()
      .then((available: boolean) => {
          if (available) {
            this.safari.show({
              url: 'http://yety.cafe24app.com/',
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
    else {
      this.nav.push(page, {}, {animate: true, animation: 'ios'});
    }
    this.toggleMenu();
  }

  getPages() {
    return this.nav.getViews().length;
  }

  back() {
    this.nav.pop();
  }

  facebook() {
    window.open('fb://profile/100004612444209', '_system', 'location=no');
  }
}

