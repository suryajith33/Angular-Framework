import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../layout/header/header.component";

@Component({
	selector: "app-main-container",
	templateUrl: "./main-container.component.html",
	styleUrls: ["./main-container.component.scss"],
	standalone: true,
	imports: [RouterOutlet, HeaderComponent],
})
export class MainContainerComponent {
	constructor() {}
}
