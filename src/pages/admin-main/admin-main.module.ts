import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminMainPage } from './admin-main';
import { ComponentsModule } from '../../components/components.module';
import { AdminNoticePageModule } from '../admin-notice/admin-notice.module';
import { AdminTimelinePageModule } from '../admin-timeline/admin-timeline.module';

@NgModule({
  declarations: [
    AdminMainPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminMainPage),
    ComponentsModule,
    AdminNoticePageModule,
    AdminTimelinePageModule
  ],
})
export class AdminMainPageModule {}
