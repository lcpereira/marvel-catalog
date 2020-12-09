import { RouterTestingModule } from '@angular/router/testing';
import { MockMarvelService } from './../../test/MockMarvelService';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MarvelService } from './../../shared/services/marvel.service';
import { DetailItemModule } from './../../shared/components/detail-item/detail-item.module';
import { CardItemLoadingModule } from './../../shared/components/card-item-loading/card-item-loading.module';
import { CardItemModule } from './../../shared/components/card-item/card-item.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsComponent } from './comics.component';

describe('ComicsComponent', () => {
  let component: ComicsComponent;
  let marvelService: MarvelService;
  let fixture: ComponentFixture<ComicsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ComicsComponent],
        imports: [
          HttpClientTestingModule,
          RouterTestingModule,
          InfiniteScrollModule,
          CardItemModule,
          CardItemLoadingModule,
          DetailItemModule,
        ],
        providers: [{ provide: MarvelService, useClass: MockMarvelService }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsComponent);
    component = fixture.componentInstance;
    marvelService = TestBed.inject(MarvelService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search character', (done) => {
    jest.spyOn(component, 'loadMoreComics');

    const firstComic = component.comics[0];

    component.$searchText.next('Test123');

    // timer do debounceTime
    setTimeout(() => {
      expect(component.searchText).toEqual('Test123');
      expect(component.loadMoreComics).toHaveBeenCalledWith(false);
      expect(component.comics).toEqual([firstComic]);
      done();
    }, 600);
  });

  it('return empty array when not finding a comic', (done) => {
    jest.spyOn(component, 'loadMoreComics');

    component.$searchText.next('aaaaaa');

    // timer do debounceTime
    setTimeout(() => {
      expect(component.searchText).toEqual('aaaaaa');
      expect(component.loadMoreComics).toHaveBeenCalledWith(false);
      expect(component.comics).toEqual([]);
      done();
    }, 600);
  });

  it('do not page when the total is equal to the amount of array', () => {
    jest.spyOn(marvelService, 'loadComics');

    component.loadMoreComics(true);

    expect(marvelService.loadComics).not.toHaveBeenCalled();
    expect(component.comics.length).toEqual(3);
  });

  it('page when the total is different from the array quantity', () => {
    jest.spyOn(marvelService, 'loadComics');

    component.total = 0;
    component.loadMoreComics(true);

    expect(marvelService.loadComics).toHaveBeenCalledWith(component.limit, 1, component.searchText);
    expect(component.comics.length).toEqual(6);
  });
});
