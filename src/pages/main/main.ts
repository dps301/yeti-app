import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroducePage } from '../introduce/introduce';
import { SupportPage } from '../support/support';
import { OrgChartPage } from '../org-chart/org-chart';
import { RoadToPage } from '../road-to/road-to';
import { NoticePage } from '../notice/notice';
import { FeedPage } from '../feed/feed';
import { App } from 'ionic-angular';
import { SafariViewController } from '@ionic-native/safari-view-controller';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public safari: SafariViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  goTo(link) {
    if(link == RoadToPage) {
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
      this.app.getRootNavs()[0].push(link, {}, {animate: true, animation: 'ios'});
    }
  }
}