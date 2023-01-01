import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService extends HttpErrorResponse {

  constructor(private toastrService: ToastrService, private router: Router) { super(toastrService) }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((httpErrorResponse: HttpErrorResponse) => {
          console.log(httpErrorResponse);
          let errorMesagge = '';
          let errorType = '';
          if (httpErrorResponse.error instanceof ErrorEvent) {
            errorType = "Client side error"
            errorMesagge = httpErrorResponse.error.error;
          } else {
            errorType = "Server side error"
            if (httpErrorResponse.status === 0) {
              errorMesagge = "No hay conexión con el servidor";
            } else {
              if (httpErrorResponse.status === 409) {
                this.router.navigateByUrl('/');
              }
              errorMesagge = `${httpErrorResponse.status}: ${httpErrorResponse.error.error} - ${httpErrorResponse.error.message}`;
            }
            this.toastrService.error(errorMesagge, errorType, { closeButton: true });
          }
          return throwError(() => new Error(errorMesagge));
        })
      )
  }
}
