import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";
import { ToastService } from "../services/toast.service";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
	const router = inject(Router);
	const toastService = inject(ToastService);

	return next(req).pipe(
		catchError((error: HttpErrorResponse) => {
			let errorMessage = "An error occurred";

			if (error.error instanceof ErrorEvent) {
				// Client-side error
				errorMessage = `Error: ${error.error.message}`;
				toastService.show(errorMessage, "error");
			} else {
				// Server-side error
				switch (error.status) {
					case 400:
						errorMessage = "Bad Request";
						toastService.show(errorMessage, "error");
						break;
					case 401:
						errorMessage = "Unauthorized";
						toastService.show(errorMessage, "error");
						router.navigate(["/auth/login"]);
						break;
					case 403:
						errorMessage = "Forbidden";
						toastService.show(errorMessage, "error");
						router.navigate(["/forbidden"]);
						break;
					case 404:
						errorMessage = "Not Found";
						toastService.show(errorMessage, "error");
						router.navigate(["/not-found"]);
						break;
					case 500:
						errorMessage = "Internal Server Error";
						toastService.show(errorMessage, "error");
						break;
					default:
						errorMessage = `Something went wrong`;
						toastService.show(errorMessage, "error");
				}
			}

			return throwError(() => error);
		})
	);
};
