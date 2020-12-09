import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item.component';

@NgModule({
  declarations: [CardItemComponent],
  exports: [CardItemComponent],
  imports: [CommonModule, RouterModule],
})
export class CardItemModule {}
