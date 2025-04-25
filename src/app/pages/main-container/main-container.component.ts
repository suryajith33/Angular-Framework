import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
	selector: "app-main-container",
	templateUrl: "./main-container.component.html",
	styleUrls: ["./main-container.component.scss"],
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, SidebarComponent],
})
export class MainContainerComponent {
	constructor() {}
}
