import { Comic } from './../../shared/interfaces/comic';
import { MarvelService } from './../../shared/services/marvel.service';
import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'marvel-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comics: Comic[] = [];
  limit = 20;
  offset = 0;
  total = 0;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  isLoading = false;
  searchText: string;
  $searchText = new Subject();
  private subscription: Subscription;

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.loadMoreComics();

    this.$searchText.pipe(debounceTime(600)).subscribe((searchText: string) => {
      this.comics = [];
      this.limit = 20;
      this.offset = 0;
      this.searchText = searchText;
      this.loadMoreComics(false);
    });
  }

  loadMoreComics(isNewPage?: boolean): void {
    if (isNewPage) {
      if (this.comics.length === this.total) {
        return;
      }

      this.offset += 1;
    }

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.isLoading = true;
    this.marvelService.loadComics(this.limit, this.offset, this.searchText).subscribe((data) => {
      this.isLoading = false;
      this.total = data.total;
      this.comics = [...this.comics, ...data.results];
    });
  }
}
