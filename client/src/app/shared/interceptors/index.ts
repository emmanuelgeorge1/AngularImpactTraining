//will register all the interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
import { HttpInterceptors } from './http.interceptor';
import { LoggerInterceptor } from './logger.interceptor';
import { TokenInterceptor } from './token.interceptor';

export const httpInterceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptors,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggerInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  },
];
