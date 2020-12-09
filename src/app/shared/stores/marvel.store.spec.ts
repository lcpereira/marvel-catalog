import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MarvelService } from './../services/marvel.service';
import { MarvelStore } from './marvel.store';

describe('MarvelStore', () => {
  let store: MarvelStore;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [MarvelService],
      }).compileComponents();

      store = TestBed.inject(MarvelStore);
    })
  );

  it('should be created', () => {
    expect(store).toBeTruthy();
  });
});
