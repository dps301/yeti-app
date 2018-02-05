import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminTimelineWritePage } from './admin-timeline-write';

@NgModule({
  declarations: [
    AdminTimelineWritePage,
  ],
  imports: [
    IonicPageModule.forChild(AdminTimelineWritePage),
  ],
})
export class AdminTimelineWritePageModule {}
