import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MarvelService } from './marvel.service';

describe('MarvelService', () => {
  let service: MarvelService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      }).compileComponents();

      service = TestBed.inject(MarvelService);
    })
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
