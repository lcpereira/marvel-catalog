import { RouterTestingModule } from '@angular/router/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MarvelService } from './../../shared/services/marvel.service';
import { DetailItemModule } from './../../shared/components/detail-item/detail-item.module';
import { CardItemLoadingModule } from './../../shared/components/card-item-loading/card-item-loading.module';
import { CardItemModule } from './../../shared/components/card-item/card-item.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharactersComponent } from './characters.component';
import { MockMarvelService } from './../../test/MockMarvelService';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let marvelService: MarvelService;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CharactersComponent],
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
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    marvelService = TestBed.inject(MarvelService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search character', (done) => {
    jest.spyOn(component, 'loadMoreCharacters');

    const firstCharacter = component.characters[0];

    component.$searchText.next('Test123');

    // timer do debounceTime
    setTimeout(() => {
      expect(component.searchText).toEqual('Test123');
      expect(component.loadMoreCharacters).toHaveBeenCalledWith(false);
      expect(component.characters).toEqual([firstCharacter]);
      done();
    }, 600);
  });

  it('return empty array when not finding a character', (done) => {
    jest.spyOn(component, 'loadMoreCharacters');

    component.$searchText.next('aaaaaa');

    // timer do debounceTime
    setTimeout(() => {
      expect(component.searchText).toEqual('aaaaaa');
      expect(component.loadMoreCharacters).toHaveBeenCalledWith(false);
      expect(component.characters).toEqual([]);
      done();
    }, 600);
  });

  it('do not page when the total is equal to the amount of array', () => {
    jest.spyOn(marvelService, 'loadCharacters');

    component.loadMoreCharacters(true);

    expect(marvelService.loadCharacters).not.toHaveBeenCalled();
    expect(component.characters.length).toEqual(3);
  });

  it('page when the total is different from the array quantity', () => {
    jest.spyOn(marvelService, 'loadCharacters');

    component.total = 0;
    component.loadMoreCharacters(true);

    expect(marvelService.loadCharacters).toHaveBeenCalledWith(
      component.limit,
      1,
      component.searchText
    );
    expect(component.characters.length).toEqual(6);
  });
});
