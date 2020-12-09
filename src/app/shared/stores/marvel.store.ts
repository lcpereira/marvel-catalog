import { Injectable } from '@angular/core';
import { MarvelService } from '../services/marvel.service';

@Injectable({
  providedIn: 'root',
})
export class MarvelStore {
  constructor(private marvelService: MarvelService) {}
}
