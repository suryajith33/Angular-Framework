import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { MainContainerComponent } from "./pages/main-container/main-container.component";
import { LoginComponent } from "./pages/auth/login/login.component";

export const routes: Routes = [
	{
		path: "login",
		loadChildren: () => import("./pages/auth/login/login.component").then((m) => m.LoginComponent),
		children: [
			{
				path: "",
				component: LoginComponent,
			},
		],
	},
	{
		path: "",
		component: MainContainerComponent,
	},
];
