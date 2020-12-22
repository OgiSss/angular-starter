import { LocalStorageService } from '@oksoftware/core/core.module';
import { LocalStorageKeysEnum } from '@oksoftware/shared/enums/local-storage.enum';
import { NavigationEnum } from '@oksoftware/shared/enums/navigation.enum';

import { AuthService } from '../../services';
import { authLogin, authLogout } from '../actions/auth.actions';

import { AuthEffects } from './auth.effects';

import { Router } from '@angular/router';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import * as assert from 'assert';
import { EMPTY } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

const scheduler = new TestScheduler((actual, expected) =>
  assert.deepStrictEqual(actual, expected),
);

describe('AuthEffects', () => {
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let router: jasmine.SpyObj<Router>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    localStorageService = jasmine.createSpyObj('LocalStorageService', [
      'setItem',
    ]);
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);
    authService = jasmine.createSpyObj('AuthService', ['login', '']);
  });

  xdescribe('login', () => {
    it('should not dispatch any action', () => {
      const actions = new Actions(EMPTY);
      const effect = new AuthEffects(actions, localStorageService, router, authService);
      const metadata = getEffectsMetadata(effect);

      expect(metadata.login.dispatch).toEqual(false);
    });

    it('should call setItem on LocalStorageService', () => {
      scheduler.run((helpers) => {
        const { cold } = helpers;
        const loginAction = authLogin({ email: 'test@test.pl', password: '12345' });
        const source = cold('a', { a: loginAction });
        const actions = new Actions(source);
        const effect = new AuthEffects(actions, localStorageService, router, authService);

        effect.login.subscribe(() => {
          expect(localStorageService.setItem).toHaveBeenCalledWith(LocalStorageKeysEnum.USER, {
            isAuthenticated: true,
          });
        });
      });
    });
  });

  describe('logout', () => {
    it('should not dispatch any action', () => {
      const actions = new Actions(EMPTY);
      const effect = new AuthEffects(actions, localStorageService, router, authService);
      const metadata = getEffectsMetadata(effect);

      expect(metadata.logout.dispatch).toEqual(false);
    });

    it('should call setItem on LocalStorageService and navigate to about', () => {
      scheduler.run((helpers) => {
        const { cold } = helpers;
        const logoutAction = authLogout();
        const source = cold('a', { a: logoutAction });
        const actions = new Actions(source);
        const effect = new AuthEffects(actions, localStorageService, router, authService);

        effect.login.subscribe(() => {
          expect(localStorageService.setItem).toHaveBeenCalledWith(LocalStorageKeysEnum.USER, {
            isAuthenticated: false,

          });
          expect(router.navigateByUrl).toHaveBeenCalledWith(`/${NavigationEnum.Login}`);
        });
      });
    });
  });
});
