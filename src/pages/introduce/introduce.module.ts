import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroducePage } from './introduce';
import { ComponentsModule } from '../../components/components.module';
import { AdminMainPageModule } from '../admin-main/admin-main.module';

@NgModule({
  declarations: [
    IntroducePage,
  ],
  imports: [
    IonicPageModule.forChild(IntroducePage),
    ComponentsModule,
    AdminMainPageModule
  ],
})
export class IntroducePageModule {}
