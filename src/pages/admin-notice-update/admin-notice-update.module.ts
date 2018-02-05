import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminNoticeUpdatePage } from './admin-notice-update';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdminNoticeUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(AdminNoticeUpdatePage),
    ComponentsModule
  ],
})
export class AdminNoticeUpdatePageModule {}
