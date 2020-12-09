import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ComicsComponent } from './comics.component';
import { ComicsRoutingModule } from './comics-routing.module';
import { CardItemModule } from './../../shared/components/card-item/card-item.module';
import { CardItemLoadingModule } from './../../shared/components/card-item-loading/card-item-loading.module';
import { DetailItemModule } from './../../shared/components/detail-item/detail-item.module';

@NgModule({
  declarations: [ComicsComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    InfiniteScrollModule,
    CardItemModule,
    CardItemLoadingModule,
    DetailItemModule,
  ],
  providers: [],
})
export class ComicsModule {}
