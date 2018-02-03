import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroducePage } from './introduce';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    IntroducePage,
  ],
  imports: [
    IonicPageModule.forChild(IntroducePage),
    ComponentsModule
  ],
})
export class IntroducePageModule {}
