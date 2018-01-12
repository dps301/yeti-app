import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { FeedItemModule } from '../../components/feed-item/feed-item.module';

@NgModule({
  declarations: [
    FeedPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedPage),
    FeedItemModule
  ],
})
export class FeedPageModule {}
