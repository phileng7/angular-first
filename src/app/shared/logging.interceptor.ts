import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Injectable } from '../../../node_modules/@angular/core';
import { tap } from '../../../node_modules/rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(
      event => {
        console.log('Loggin interceptor', event);
      }
    ));
  }
}
