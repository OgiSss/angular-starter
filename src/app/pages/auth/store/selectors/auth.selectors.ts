import { createSelector } from '@ngrx/store';

import { selectAuthState } from '@oksoftware/core/core.state';
import { AuthState } from '../models/auth.models';

export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);
