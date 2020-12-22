import { createAction, props } from '@ngrx/store';

export const authLogin = createAction('[Auth] Login', props<{ email: string, password: string }>());
export const authLoginSuccessful = createAction('[Auth] Login successful', props<{
    email: string, name: string, tokens:
    { refreshToken: string },
}>());
export const authLoginFailure = createAction('[Auth] Login failure', props<{ error: string }>());

export const authLogout = createAction('[Auth] Logout');
