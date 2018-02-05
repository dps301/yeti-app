import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Slides } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
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
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { FeedItemModule } from '../components/feed-item/feed-item.module';
import { FeedItemComponent } from '../components/feed-item/feed-item';
import { MainPageModule } from '../pages/main/main.module';
import { AdminMainPageModule } from '../pages/admin-main/admin-main.module';
import { FileUploadModule } from 'ng2-file-upload';

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
    SafeHtmlModule,
    AdminMainPageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    FileUploadModule,
    HttpService,
    ServerAddr,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SafariViewController
  ]
})
export class AppModule {}
