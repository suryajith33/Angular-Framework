import { createActionGroup, props } from '@ngrx/store';
import { User } from '../../auth.model';

export const loginActions = createActionGroup({
  source: '[Auth]',
  events: {
    login: props<{ username: string; password: string }>(),
    loginSuccess: props<{ token: string }>(),
    loginFailure: props<{ error: string }>()
  }
});
