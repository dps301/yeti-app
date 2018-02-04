import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafariViewController } from '@ionic-native/safari-view-controller';

declare const Kakao:any;

@IonicPage()
@Component({
  selector: 'page-road-to',
  templateUrl: 'road-to.html',
})
export class RoadToPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private safari: SafariViewController) {
  }

  ionViewDidLoad() {
    // Kakao.init('803c6435507c9f64e94bae8fd137012e');
  }

  navi() {
    console.log('네비버튼 클릭');
    
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
    
    // Kakao.Navi.start({
    //   name: "예티쉼터",
    //   x: 129.277549,
    //   y: 35.952027,
    //   coordType: 'wgs84'
    // });
  }
}