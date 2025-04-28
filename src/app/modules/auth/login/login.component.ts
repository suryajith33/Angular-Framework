import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { LoginResponse } from "../../../shared/store/login/login.model";
import { loginActions } from "../../../shared/store/login/login.action";
import { selectLoginState } from "../../../shared/store/login/login.selector";

interface AppState {
	auth: LoginResponse;
}

@Component({
	selector: "app-login",
	standalone: true,
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
	loginForm: FormGroup;
	isLoading = false;
	private subscription: Subscription = new Subscription();

	constructor(
		private fb: FormBuilder, 
		private router: Router,
		private store: Store<AppState>
	) {
		this.loginForm = this.fb.group({
			username: ["", [Validators.required, Validators.email]],
			password: ["", [Validators.required, Validators.minLength(6)]],
		});
	}
//useeffect
	ngOnInit() {
		this.subscription.add(
			this.store.select(selectLoginState).subscribe((state) => {
				if (state) {
					this.isLoading = state.loading;
					if (state.token) {
						this.router.navigate(['/dashboard']);
					}
				}
			})
		);
	}
//useeffect clean up
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	onSubmit() {
		if (this.loginForm.valid) {
			const { username, password } = this.loginForm.value;
			this.store.dispatch(loginActions.login({ username, password }));
		}
	}
}
