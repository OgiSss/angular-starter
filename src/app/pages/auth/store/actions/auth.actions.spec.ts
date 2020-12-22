import { authLogin, authLogout } from '../actions/auth.actions';

describe('Auth Actions', () => {
  it('should create ActionAuthLogin action', () => {
    const action = authLogin({ email: 'test@test.pl', password: '123456789' });

    expect(action.type).toEqual('[Auth] Login');
  });

  it('should create ActionAuthLogout action', () => {
    const action = authLogout();

    expect(action.type).toEqual('[Auth] Logout');
  });
});
