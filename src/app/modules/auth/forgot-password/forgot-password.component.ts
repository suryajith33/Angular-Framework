import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-forgot-password",
	standalone: true,
	imports: [CommonModule, FormsModule, RouterLink],
	template: `
		<div class="auth-container">
			<div class="auth-card">
				<h2>Forgot Password</h2>
				<form (ngSubmit)="onSubmit()" #forgotPasswordForm="ngForm">
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" [(ngModel)]="email" required email />
					</div>
					<button type="submit" [disabled]="!forgotPasswordForm.valid">Reset Password</button>
				</form>
				<p class="auth-link">Remember your password? <a routerLink="/auth/login">Login</a></p>
			</div>
		</div>
	`,
	styles: [
		`
			.auth-container {
				display: flex;
				justify-content: center;
				align-items: center;
				min-height: 100vh;
				background-color: #f5f5f5;
			}
			.auth-card {
				background: white;
				padding: 2rem;
				border-radius: 8px;
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
				width: 100%;
				max-width: 400px;
			}
			.form-group {
				margin-bottom: 1rem;
			}
			label {
				display: block;
				margin-bottom: 0.5rem;
			}
			input {
				width: 100%;
				padding: 0.5rem;
				border: 1px solid #ddd;
				border-radius: 4px;
			}
			button {
				width: 100%;
				padding: 0.75rem;
				background-color: #007bff;
				color: white;
				border: none;
				border-radius: 4px;
				cursor: pointer;
			}
			button:disabled {
				background-color: #ccc;
			}
			.auth-link {
				text-align: center;
				margin-top: 1rem;
			}
		`,
	],
})
export class ForgotPasswordComponent {
	email = "";

	onSubmit() {
		// TODO: Implement password reset logic
	}
}
