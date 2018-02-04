import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafariViewController } from '@ionic-native/safari-view-controller';

@IonicPage()
@Component({
  selector: 'page-road-to',
  templateUrl: 'road-to.html',
})
export class RoadToPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private safari: SafariViewController) {
  }

  ionViewDidLoad() {
  }

  navi() {
    this.safari.isAvailable()
    .then((available: boolean) => {
        if (available) {
          this.safari.show({
            url: 'https://developers.kakao.com/docs/js/demos/navi',
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