import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedItemComponent } from './feed-item';
import { SquareModule } from '../../directive/square/sqare.module';
import { IonicModule } from 'ionic-angular';

@NgModule({
    declarations: [ FeedItemComponent ],
    imports: [ CommonModule , SquareModule,IonicModule.forRoot(FeedItemComponent)],
    exports: [ FeedItemComponent ],
    providers: [],
})
export class FeedItemModule {}