import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginResponse } from './login.model';

export const selectAuthState = createFeatureSelector<LoginResponse>('auth');

export const selectAuthToken = createSelector(
  selectAuthState,
  (state: LoginResponse) => state.token
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state: LoginResponse) => state.loading
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: LoginResponse) => state.error
); 