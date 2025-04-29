import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { LoginService } from "../login.service";
import { loginActions } from "./login.action";
import { LoginResponse } from "./login.model";

@Injectable()
export class LoginEffects {
	login$ = createEffect(
		(actions$ = inject(Actions), authService = inject(LoginService)) => {
			return actions$.pipe(
				ofType(loginActions.login),
				mergeMap((action) =>
					authService.login(action.username, action.password).pipe(
						map((response: LoginResponse) => loginActions.loginSuccess({ token: response.token ?? "" })),
						catchError((error) => of(loginActions.loginFailure({ error: error.message })))
					)
				)
			);
		},
		{ functional: true }
	);
}
