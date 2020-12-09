import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsComponent } from './comics.component';
import { MarvelType } from './../../shared/enums/marvel-type.enum';
import { DetailItemComponent } from './../../shared/components/detail-item/detail-item.component';

const routes: Routes = [
  {
    path: '',
    component: ComicsComponent,
  },
  {
    path: ':id',
    component: DetailItemComponent,
    data: {
      type: MarvelType.COMICS,
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsRoutingModule {}
