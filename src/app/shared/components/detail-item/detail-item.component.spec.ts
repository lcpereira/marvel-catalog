import { MarvelType } from './../../enums/marvel-type.enum';
import { RouterTestingModule } from '@angular/router/testing';
import { MarvelService } from './../../services/marvel.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailItemComponent } from './detail-item.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-fake-component',
  template: ``,
})
export class FakeComponent {}

describe('DetailItemComponent', () => {
  let component: DetailItemComponent;
  let router: Router;
  let fixture: ComponentFixture<DetailItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DetailItemComponent, FakeComponent],
        imports: [
          HttpClientTestingModule,
          RouterTestingModule.withRoutes([
            { path: 'comics', component: FakeComponent },
            { path: 'characters', component: FakeComponent },
          ]),
        ],
        providers: [MarvelService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailItemComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should load comic item', () => {
    component.itemId = '123';
    component.type = MarvelType.COMICS;

    component.loadItem();

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should load character item', () => {
    component.itemId = '456';
    component.type = MarvelType.CHARACTERS;

    component.loadItem();

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should back to comics page', () => {
    jest.spyOn(router, 'navigate').mockReturnValue(null);

    component.type = MarvelType.COMICS;

    component.backPage();

    expect(router.navigate).toHaveBeenCalledWith(['/comics']);
  });

  it('should back to characters page', () => {
    jest.spyOn(router, 'navigate').mockReturnValue(null);

    component.type = MarvelType.CHARACTERS;

    component.backPage();

    expect(router.navigate).toHaveBeenCalledWith(['/characters']);
  });
});
