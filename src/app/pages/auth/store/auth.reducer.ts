import { AuthState } from './models/auth.models';
import { authLogin, authLoginSuccessful, authLogout } from './actions/auth.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: AuthState = {
  isAuthenticated: false,
  tokens: undefined,
  name: undefined,
  email: undefined
};

const reducer = createReducer(
  initialState,
  on(authLoginSuccessful, (state, { email, tokens, name }) => ({
    ...state,
    email,
    name,
    tokens: { refreshToken: tokens.refreshToken },
    isAuthenticated: true
  })),
  on(authLogout, (state) => ({ ...state, isAuthenticated: false }))
);

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return reducer(state, action);
}
