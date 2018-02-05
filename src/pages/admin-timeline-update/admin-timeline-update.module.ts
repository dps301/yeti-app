import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminTimelineUpdatePage } from './admin-timeline-update';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AdminTimelineUpdatePage,
  ],
  imports: [
    FileUploadModule,
    IonicPageModule.forChild(AdminTimelineUpdatePage),
  ],
})
export class AdminTimelineUpdatePageModule {}
