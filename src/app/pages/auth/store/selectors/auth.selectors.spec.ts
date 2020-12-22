import { selectAuth, selectIsAuthenticated } from './auth.selectors';

describe('Auth Selectors', () => {
  it('selectAuth', () => {
    const state = createAuthState();

    expect(selectAuth(state)).toBe(state.auth);
  });

  it('selectIsAuthenticated', () => {
    const state = createAuthState();

    expect(selectIsAuthenticated(state)).toBe(false);
  });
});

const createAuthState = () => ({
  auth: {
    isAuthenticated: false,
    name: 'name',
    email: 'test@test.pl',
    tokens: { refreshToken: 'test' },
  },
  settings: {} as any,
  router: {} as any,
});
