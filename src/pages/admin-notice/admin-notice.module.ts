import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminNoticePage } from './admin-notice';
import { ComponentsModule } from '../../components/components.module';
import { AdminNoticeWritePageModule } from '../admin-notice-write/admin-notice-write.module';
import { AdminNoticeUpdatePageModule } from '../admin-notice-update/admin-notice-update.module';

@NgModule({
  declarations: [
    AdminNoticePage,
    
  ],
  imports: [
    IonicPageModule.forChild(AdminNoticePage),
    ComponentsModule,
    AdminNoticeWritePageModule,
    AdminNoticeUpdatePageModule
  ],
})
export class AdminNoticePageModule {}
