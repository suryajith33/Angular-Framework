import { Component } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { ToastComponent } from "./core/components/toast/toast.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, ToastComponent],
	template: `
		<router-outlet />
		<app-toast />
	`,
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "PM-Tool-Revamp";
	constructor(private router: Router) {}
	goTO() {}
}
