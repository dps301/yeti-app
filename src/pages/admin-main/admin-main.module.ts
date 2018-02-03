import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminMainPage } from './admin-main';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdminMainPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminMainPage),
    ComponentsModule
  ],
})
export class AdminMainPageModule {}
