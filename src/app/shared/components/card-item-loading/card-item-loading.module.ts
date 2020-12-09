import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardItemLoadingComponent } from './card-item-loading.component';

@NgModule({
  declarations: [CardItemLoadingComponent],
  exports: [CardItemLoadingComponent],
  imports: [CommonModule, NgxSkeletonLoaderModule],
})
export class CardItemLoadingModule {}
