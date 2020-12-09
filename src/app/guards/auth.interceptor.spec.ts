import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthInterceptor } from './auth.interceptor';
import { LocalStorageService } from './../shared/services/local-storage.service';

@Injectable()
export class TestService {
  ROOT_URL = `http://jsonplaceholder.typicode.com`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/posts`);
  }
}

describe('AuthInterceptor', () => {
  let service: TestService;
  let localStorageService: LocalStorageService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TestService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.inject(TestService);
    httpTestingController = TestBed.inject(HttpTestingController);
    localStorageService = TestBed.inject(LocalStorageService);
    localStorageService.setItem('publicKey', '123-publicKey');
    localStorageService.setItem('privateKey', '456-privateKey');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should add a passkey in the API', () => {
    service.getPosts().subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpTestingController.expectOne(
      (req) => req.url === 'http://jsonplaceholder.typicode.com/posts'
    );

    expect(httpRequest.request.params.has('apikey')).toBeTruthy();
    expect(httpRequest.request.params.has('hash')).toBeTruthy();

    httpRequest.flush({});
  });
});
