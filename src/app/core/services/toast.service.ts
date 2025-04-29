import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface ToastMessage {
	message: string;
	type: "success" | "error" | "info" | "warning";
	duration?: number;
}

@Injectable({
	providedIn: "root",
})
export class ToastService {
	private messages = new BehaviorSubject<ToastMessage[]>([]);

	messages$ = this.messages.asObservable();

	show(message: string, type: ToastMessage["type"] = "info", duration: number = 3000) {
		const toastMessage: ToastMessage = { message, type, duration };
		const currentMessages = this.messages.value;
		this.messages.next([...currentMessages, toastMessage]);

		if (duration > 0) {
			setTimeout(() => {
				this.removeToast(toastMessage);
			}, duration);
		}
	}

	removeToast(toast: ToastMessage) {
		const currentMessages = this.messages.value;
		this.messages.next(currentMessages.filter((m) => m !== toast));
	}

	clear() {
		this.messages.next([]);
	}
}
