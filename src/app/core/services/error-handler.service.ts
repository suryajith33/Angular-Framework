import { ErrorHandler, Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ErrorHandlerService implements ErrorHandler {
	handleError(error: any): void {
		// You can add your error handling logic here
		console.error("Global error handler:", error);

		// Example: Send error to error tracking service
		this.sendToErrorTrackingService(error);

		// Example: Show error in UI
		this.showErrorNotification(error);
	}

	private sendToErrorTrackingService(error: any): void {
		// Implement your error tracking service integration here
		// Example: Sentry, LogRocket, etc.
	}

	private showErrorNotification(error: any): void {
		alert(error);
		// Implement your notification service here
		// Example: Toast notification, modal, etc.
	}
}
