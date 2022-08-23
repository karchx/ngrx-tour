import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MarvelInterceptor implements HttpInterceptor {
  readonly BASE_URL = 'https://gateway.marvel.com/v1/public';
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf(this.BASE_URL) === 0) {
      request = request.clone({
        params: request.params
          .set('apikey', environment.marvel.public)
          .set('ts', environment.marvel.ts)
          .set('hash', environment.marvel.hash),
      });
    }
    return next.handle(request);
  }
}
