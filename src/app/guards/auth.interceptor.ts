import { LocalStorageService } from './../shared/services/local-storage.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const ts = new Date().getTime();
    const publicKey = '98c26e68ac5a3687309877883b925a65'; // this.localStorageService.getItem('publicKey');
    const privateKey = 'f2f08f1bbab302ea44af0a272412c102a618859c'; // this.localStorageService.getItem('privateKey');
    const hash = Md5.hashStr(ts + privateKey + publicKey);

    request = request.clone({
      setParams: {
        ts: ts.toString(),
        apikey: publicKey,
        hash: hash.toString(),
      },
    });

    return next.handle(request);
  }
}
