import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';

import { SnackBarUtil } from '../utils/snackbar-util';
import { SpinnerUtil } from '../utils/spinner-util';

@Injectable({
    providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {

    // Spinner
    static spinner: ElementRef;

    constructor(
        private snackBarUtil: SnackBarUtil,
        private spinnerUtil: SpinnerUtil
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            }
        });

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                this.spinnerUtil.showSpinner(ApiInterceptor.spinner);
                if (event instanceof HttpResponse) {
                    // If there is an HTTP event
                    this.spinnerUtil.hideSpinner(ApiInterceptor.spinner);
                }

                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                this.snackBarUtil.showSnackBar('api-fail');
                this.spinnerUtil.hideSpinner(ApiInterceptor.spinner);
                return throwError(error);
            })
        );
    }
}
