import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { MainContainerComponent } from "./modules/main-container/main-container.component";
import { LoginComponent } from "./modules/auth/login/login.component";

export const routes: Routes = [
	{
		path: "login",
		component: LoginComponent,
	},
	{
		path: "",
		component: MainContainerComponent,
	},
];
