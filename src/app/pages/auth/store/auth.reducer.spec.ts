import { authLoginSuccessful, authLogout } from './actions/auth.actions';
import { authReducer, initialState } from './auth.reducer';
import { AuthState } from './models/auth.models';

describe('AuthReducer', () => {
  const TEST_INITIAL_STATE: AuthState = {
    isAuthenticated: false,
    email: undefined,
    name: undefined,
    tokens: undefined,
  };

  it('should return default state', () => {
    const action = {} as any;
    const state = authReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should set authentication to true on login', () => {
    const action = authLoginSuccessful({ email: 'test@test.pl', name: 'name', tokens: { refreshToken: '124asdasd' } });
    const state = authReducer(TEST_INITIAL_STATE, action);

    expect(state.isAuthenticated).toBe(true);
  });

  it('should set authentication to false on logout', () => {
    const action = authLogout();
    const state = authReducer(TEST_INITIAL_STATE, action);

    expect(state.isAuthenticated).toBe(false);
  });
});
