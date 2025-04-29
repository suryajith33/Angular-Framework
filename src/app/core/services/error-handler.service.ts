import { ErrorHandler, Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ErrorHandlerService implements ErrorHandler {
	handleError(error: Error): void {
		// You can add your error handling logic here
		// Example: Send error to error tracking service
		this.sendToErrorTrackingService(error);
		alert(error);
		// Example: Show error in UI
		this.showErrorNotification(error);
	}

	private sendToErrorTrackingService(error: Error): void {
		alert(error);
		// Implement your error tracking service integration here
		// Example: Sentry, LogRocket, etc.
	}

	private showErrorNotification(error: Error): void {
		alert(error);
		// Implement your notification service here
		// Example: Toast notification, modal, etc.
	}
}
