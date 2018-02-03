import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { SquareModule } from '../../directive/square/sqare.module';
import { IntroducePageModule } from '../introduce/introduce.module';
import { SupportPageModule } from '../support/support.module';
import { OrgChartPageModule } from '../org-chart/org-chart.module';
import { RoadToPageModule } from '../road-to/road-to.module';
import { NoticePageModule } from '../notice/notice.module';
import { FeedPageModule } from '../feed/feed.module';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    SquareModule,
    IntroducePageModule,
    SupportPageModule,
    OrgChartPageModule,
    RoadToPageModule,
    NoticePageModule,
    FeedPageModule
  ],
})
export class MainPageModule {}
