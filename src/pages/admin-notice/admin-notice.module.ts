import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminNoticePage } from './admin-notice';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdminNoticePage,
  ],
  imports: [
    IonicPageModule.forChild(AdminNoticePage),
    ComponentsModule
  ],
})
export class AdminNoticePageModule {}
