import { MarvelService } from './../../services/marvel.service';
import { MarvelType } from './../../enums/marvel-type.enum';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'ngx-detail-item',
  templateUrl: 'detail-item.component.html',
  styleUrls: ['detail-item.component.scss'],
})
export class DetailItemComponent implements OnInit, OnDestroy {
  type: MarvelType;
  itemId: string;
  item$: Observable<any>;

  private subs = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private marvelService: MarvelService
  ) {}

  ngOnInit(): void {
    this.subs.add(this.route.data.subscribe((data) => (this.type = data.type)));

    this.subs.add(
      this.route.params.subscribe((params) => {
        this.itemId = params.id;
        this.loadItem();
      })
    );
  }

  loadItem(): void {
    if (this.type === MarvelType.COMICS) {
      this.item$ = this.marvelService.getComic(this.itemId);
    } else {
      this.item$ = this.marvelService.getCharacter(this.itemId);
    }
  }

  backPage(): void {
    if (this.type === MarvelType.COMICS) {
      this.router.navigate(['/comics']);
    } else {
      this.router.navigate(['/characters']);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
