import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginResponse } from "./login.model";

export const selectLoginState = createFeatureSelector<LoginResponse>("auth");

export const selectLoginStateToken = createSelector(selectLoginState, (state: LoginResponse) => state.token);

export const selectLoginStateLoading = createSelector(selectLoginState, (state: LoginResponse) => state.loading);

export const selectLoginStateError = createSelector(selectLoginState, (state: LoginResponse) => state.error);
