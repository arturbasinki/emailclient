import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log(req);
    const modifiedReq = req.clone({
      withCredentials: true,
    });
    // console.log(modifiedReq);
    return next.handle(modifiedReq);
    // .pipe(
    //   filter((val) => val.type === HttpEventType.Sent),
    //   tap((val) => console.log('Sent the request'))
    // );
  }
}
