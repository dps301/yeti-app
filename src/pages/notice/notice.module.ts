import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticePage } from './notice';
import { NoticeDetailPageModule } from '../notice-detail/notice-detail.module';

@NgModule({
  declarations: [
    NoticePage,
  ],
  imports: [
    IonicPageModule.forChild(NoticePage),
    NoticeDetailPageModule
  ],
})
export class NoticePageModule {}
