import { of, Observable } from 'rxjs';

export class MockMarvelService {
  items = [
    {
      id: '123',
      thumbnail: {
        path: 'test123',
        extension: 'jpg',
      },
      title: 'Test123 title',
      name: 'Test123 title',
      description: 'Test123 description',
    },
    {
      id: '456',
      thumbnail: {
        path: 'test456',
        extension: 'jpg',
      },
      title: 'Test456 title',
      name: 'Test456 title',
      description: 'Test456 description',
    },
    {
      id: '789',
      thumbnail: {
        path: 'test789',
        extension: 'jpg',
      },
      title: 'Test789 title',
      name: 'Test789 title',
      description: 'Test789 description',
    },
  ];

  loadComics(limit, offset, searchText): Observable<any> {
    const results = this.items.filter((item) => {
      if (!searchText) {
        return true;
      }

      return item.title.startsWith(searchText);
    });

    return of({
      total: 3,
      results,
    });
  }

  getComic(itemId: string): Observable<any> {
    const comic = this.items.find((item) => {
      return item.id === itemId;
    });

    return of(comic);
  }

  loadCharacters(limit, offset, searchText): Observable<any> {
    const results = this.items.filter((item) => {
      if (!searchText) {
        return true;
      }

      return item.name.startsWith(searchText);
    });

    return of({
      total: 3,
      results,
    });
  }

  getCharacter(itemId: string): Observable<any> {
    const character = this.items.find((item) => {
      return item.id === itemId;
    });

    return of(character);
  }
}
