import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemLoadingComponent } from './card-item-loading.component';

describe('CardItemLoadingComponent', () => {
  let component: CardItemLoadingComponent;
  let fixture: ComponentFixture<CardItemLoadingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CardItemLoadingComponent],
        imports: [NgxSkeletonLoaderModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
