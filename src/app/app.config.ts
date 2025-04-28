import { ApplicationConfig, provideZoneChangeDetection, ErrorHandler } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { errorInterceptor } from "./core/middleware/error.interceptor";
import { ErrorHandlerService } from "./core/services/error-handler.service";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideHttpClient(withInterceptors([errorInterceptor])),
		{
			provide: ErrorHandler,
			useClass: ErrorHandlerService,
		},
	],
};
