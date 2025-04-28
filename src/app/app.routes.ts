import { Routes } from "@angular/router";
import { authGuard } from "./core/guards/auth.guard";

export const routes: Routes = [
	{
		path: "auth",
		children: [
			{
				path: "login",
				loadComponent: () => import("./modules/auth/login/login.component").then((m) => m.LoginComponent),
			},
			{
				path: "register",
				loadComponent: () => import("./modules/auth/register/register.component").then((m) => m.RegisterComponent),
			},
			{
				path: "forgot-password",
				loadComponent: () =>
					import("./modules/auth/forgot-password/forgot-password.component").then((m) => m.ForgotPasswordComponent),
			},
		],
	},
	{
		path: "",
		canActivate: [authGuard],
		loadComponent: () =>
			import("./modules/main-container/main-container.component").then((m) => m.MainContainerComponent),
	},
	{
		path: "**",
		redirectTo: "",
	},
];
