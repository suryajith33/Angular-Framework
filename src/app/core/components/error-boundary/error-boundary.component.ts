import { Component, ErrorHandler, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-error-boundary",
	standalone: true,
	imports: [CommonModule],
	template: `
		<ng-container *ngIf="!hasError">
			<ng-content></ng-content>
		</ng-container>
		<div *ngIf="hasError" class="error-boundary">
			<h2>Something went wrong</h2>
			<p>We're sorry, but something went wrong. Please try refreshing the page.</p>
			<button (click)="reloadPage()">Refresh Page</button>
		</div>
	`,
	styles: [
		`
			.error-boundary {
				padding: 20px;
				text-align: center;
				background-color: var(--white);
				border-radius: 8px;
				margin: 20px;
			}
			button {
				padding: 8px 16px;
				background-color: var(--blue);
				color: white;
				border: none;
				border-radius: 4px;
				cursor: pointer;
			}
			button:hover {
				background-color: var(--blue);
			}
		`,
	],
})
export class ErrorBoundaryComponent {
	hasError = false;
	private errorHandler = inject(ErrorHandler);

	constructor() {
		// Override the default error handler
		const originalErrorHandler = this.errorHandler.handleError;
		this.errorHandler.handleError = (error) => {
			this.hasError = true;
			originalErrorHandler(error);
		};
	}

	reloadPage() {
		window.location.reload();
	}
}
