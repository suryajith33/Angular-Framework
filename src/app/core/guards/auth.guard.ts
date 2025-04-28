import { inject } from "@angular/core";
import { Router, type CanActivateFn } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
	const router = inject(Router);
	// Check if user is authenticated
	const isAuthenticated = localStorage.getItem("token") !== null;
	if (!isAuthenticated) {
		// Redirect to login page if not authenticated
		router.navigate(["/auth/login"]);
		return false;
	}
	return true;
};
