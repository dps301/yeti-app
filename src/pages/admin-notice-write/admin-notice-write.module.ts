import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminNoticeWritePage } from './admin-notice-write';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdminNoticeWritePage,
  ],
  imports: [
    IonicPageModule.forChild(AdminNoticeWritePage),
    ComponentsModule
  ],
})
export class AdminNoticeWritePageModule {}
