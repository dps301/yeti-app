import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminTimelinePage } from './admin-timeline';
import { AdminTimelineUpdatePageModule } from '../admin-timeline-update/admin-timeline-update.module';
import { AdminTimelineWritePageModule } from '../admin-timeline-write/admin-timeline-write.module';

@NgModule({
  declarations: [
    AdminTimelinePage,
  ],
  imports: [
    IonicPageModule.forChild(AdminTimelinePage),
    AdminTimelineUpdatePageModule,
    AdminTimelineWritePageModule
  ],
})
export class AdminTimelinePageModule {}
