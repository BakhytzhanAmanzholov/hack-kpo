import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      url: environment.apiUrl + request.url
    })

    if (this.authService.isLogged) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.token}`
        }
      });
    }

    return next.handle(request);
  }
}
