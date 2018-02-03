import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgChartPage } from './org-chart';

@NgModule({
  declarations: [
    OrgChartPage,
  ],
  imports: [
    IonicPageModule.forChild(OrgChartPage),
  ],
})
export class OrgChartPageModule {}
