import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
	const router = inject(Router);

	return next(req).pipe(
		catchError((error: HttpErrorResponse) => {
			let errorMessage = "An error occurred";

			if (error.error instanceof ErrorEvent) {
				// Client-side error
				errorMessage = `Error: ${error.error.message}`;
			} else {
				// Server-side error
				switch (error.status) {
					case 400:
						errorMessage = "Bad Request";
						break;
					case 401:
						errorMessage = "Unauthorized";
						router.navigate(["/auth/login"]);
						break;
					case 403:
						errorMessage = "Forbidden";
						router.navigate(["/forbidden"]);
						break;
					case 404:
						errorMessage = "Not Found";
						router.navigate(["/not-found"]);
						break;
					case 500:
						errorMessage = "Internal Server Error";
						break;
					default:
						errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
				}
			}

			// You can add your error handling logic here, such as showing a toast notification
			console.error(errorMessage);

			return throwError(() => error);
		})
	);
};
