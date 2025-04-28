import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
	public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

	constructor(private router: Router) {
		// Check initial authentication state
		this.checkAuthState();
	}

	private checkAuthState(): void {
		const token = localStorage.getItem("token");
		this.isAuthenticatedSubject.next(!!token);
	}

	login(username: string, password: string): void {
		// TODO: Replace with actual API call
		if (username && password) {
			// Simulate successful login
			localStorage.setItem("token", "dummy-token");
			this.isAuthenticatedSubject.next(true);
			this.router.navigate(["/"]);
		}
	}

	logout(): void {
		localStorage.removeItem("token");
		this.isAuthenticatedSubject.next(false);
		this.router.navigate(["/auth/login"]);
	}

	isAuthenticated(): boolean {
		return this.isAuthenticatedSubject.value;
	}
}
