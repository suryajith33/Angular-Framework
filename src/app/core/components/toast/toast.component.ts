import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastService, ToastMessage } from "../../services/toast.service";

@Component({
	selector: "app-toast",
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="toast-container">
			<div *ngFor="let message of messages" [class]="'toast ' + message.type" (click)="removeToast(message)">
				{{ message.message }}
			</div>
		</div>
	`,
	styles: [
		`
			.toast-container {
				position: fixed;
				top: 20px;
				right: 20px;
				z-index: 1000;
			}
			.toast {
				padding: 12px 24px;
				margin-bottom: 8px;
				border-radius: 4px;
				color: white;
				cursor: pointer;
				min-width: 200px;
				box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
			}
			.toast.success {
				background-color: #4caf50;
			}
			.toast.error {
				background-color: #f44336;
			}
			.toast.info {
				background-color: #2196f3;
			}
			.toast.warning {
				background-color: #ff9800;
			}
		`,
	],
})
export class ToastComponent implements OnInit {
	messages: ToastMessage[] = [];

	constructor(private toastService: ToastService) {}

	ngOnInit() {
		this.toastService.messages$.subscribe((messages) => {
			this.messages = messages;
		});
	}

	removeToast(message: ToastMessage) {
		this.toastService.removeToast(message);
	}
}
