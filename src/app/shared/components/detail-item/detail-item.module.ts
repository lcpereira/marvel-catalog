import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailItemComponent } from './detail-item.component';

@NgModule({
  declarations: [DetailItemComponent],
  exports: [DetailItemComponent],
  imports: [CommonModule, RouterModule],
})
export class DetailItemModule {}
