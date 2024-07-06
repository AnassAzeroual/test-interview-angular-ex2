import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { GlobalService } from './global.service';


export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const srvGlobal = inject(GlobalService);

  srvGlobal.changeSpinnerValueState(true)
  let authToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGU2YTA0ODJkNzA1YTk0YjBhMzBhNDg4Y2U5MDU4YSIsIm5iZiI6MTcyMDI3NDE0NC43MzgxNCwic3ViIjoiNjY4OTRiNmM4MWY2MDUxMGQyODkwODRlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0tog9joeT8SdIL7BkOghcqki8L7233oFLv6fzXZ2JKI";

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          router.navigate(['/']);
        } else {
          console.log('Handle other HTTP error codes:', err);
        }
      } else {
        console.log('Handle non-HTTP errors:', err);
      }

      // Re-throw the error to propagate it further
      return of(err);
    }),
    map(v => {
      srvGlobal.changeSpinnerValueState(false)
      return v
    })
  );
};
