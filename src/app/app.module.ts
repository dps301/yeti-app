import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MainPageModule } from '../pages/main/main.module';
import { IntroducePageModule } from '../pages/introduce/introduce.module';
import { FeedPageModule } from '../pages/feed/feed.module';
import { SupportPageModule } from '../pages/support/support.module';
import { OrgChartPageModule } from '../pages/org-chart/org-chart.module';
import { RoadToPageModule } from '../pages/road-to/road-to.module';
import { NoticePageModule } from '../pages/notice/notice.module';
import { SafeHtmlModule } from '../directive/safe-html/pipe.safehtml.module';
import { HttpService } from '../services/http.service';
import { ServerAddr } from '../services/server.addr';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
    }),
    MainPageModule,
    IntroducePageModule,
    SupportPageModule,
    OrgChartPageModule,
    RoadToPageModule,
    NoticePageModule,
    FeedPageModule,
    SafeHtmlModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    HttpService,
    ServerAddr,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
