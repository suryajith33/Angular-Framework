import { createReducer, on } from '@ngrx/store';
import { LoginResponse } from './login.model';
import { loginActions } from './login.action';

const initialState: LoginResponse = {
    token: null,
    loading: false,
    error: null,
  };
  

export const authReducer = createReducer(
  initialState,
  on(loginActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loginActions.loginSuccess, (state, { token }) => ({
    ...state,
    token,
    loading: false,
  })),
  on(loginActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
