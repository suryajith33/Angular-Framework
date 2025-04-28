
import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { LoginEffects } from './shared/store/login/login.effect';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { authReducer } from './shared/store/login/login.reducer';
import { routes } from './app.routes';
import { errorInterceptor } from './core/middleware/error.interceptor';
import { ErrorHandlerService } from './core/services/error-handler.service';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideStore({ auth: authReducer }),
		provideEffects([LoginEffects]),
		provideHttpClient(withInterceptors([errorInterceptor])),
		{
			provide: ErrorHandler,
			useClass: ErrorHandlerService,
		},
	],
};
