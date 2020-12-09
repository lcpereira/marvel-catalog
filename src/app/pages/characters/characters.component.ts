import { Character } from './../../shared/interfaces/character';
import { MarvelService } from '../../shared/services/marvel.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'marvel-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
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
    this.loadMoreCharacters();

    this.$searchText.pipe(debounceTime(600)).subscribe((searchText: string) => {
      this.characters = [];
      this.limit = 20;
      this.offset = 0;
      this.searchText = searchText;
      this.loadMoreCharacters(false);
    });
  }

  loadMoreCharacters(isNewPage?: boolean): void {
    if (isNewPage) {
      if (this.characters.length === this.total) {
        return;
      }

      this.offset += 1;
    }

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.isLoading = true;
    this.subscription = this.marvelService
      .loadCharacters(this.limit, this.offset, this.searchText)
      .subscribe((data) => {
        this.isLoading = false;
        this.total = data.total;
        this.characters = [...this.characters, ...data.results];
      });
  }
}
