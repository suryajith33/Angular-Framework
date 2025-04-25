import { Component } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet],
	template: `<router-outlet />`,
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "PM-Tool-Revamp";
	constructor(private router: Router) {}.
	 goTO(){
		
	 }
}
