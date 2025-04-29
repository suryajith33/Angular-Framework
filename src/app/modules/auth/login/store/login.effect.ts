import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators'; // Import RxJS operators
import { of } from 'rxjs'; // Import `of` to create an observable from a value
import { LoginService } from '../user-service.service';
import { User } from '../../auth.model';
import { loginActions } from './login.action';

@Injectable()
export class LoginEffects {
  login$ = createEffect((
    actions$ = inject(Actions),
    authService = inject(LoginService)
  ) => {
    return actions$.pipe(
      ofType(loginActions.login),
      mergeMap((action) => 
        authService.login(action.username, action.password).pipe(
          map((response) => loginActions.loginSuccess({ token: response.token ?? "" })),
          catchError((error) => of(loginActions.loginFailure({ error: error.message })))
        )
      )
    );
  },{functional: true});
}
