
import { LocalStorageService } from '@oksoftware/core/local-storage/local-storage.service';
import { LocalStorageKeysEnum } from '@oksoftware/shared/enums/local-storage.enum';
import { NavigationEnum } from '@oksoftware/shared/enums/navigation.enum';

import { AuthService } from '../../services';
import { authLogin, authLoginSuccessful, authLogout } from '../actions/auth.actions';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  login = createEffect(
    () => this.actions$.pipe(
      ofType(authLogin),
      switchMap((payload) => this.auth.login(payload.email, payload.password).pipe(
        map((result) => authLoginSuccessful({
          tokens: { refreshToken: result.user.refreshToken },
          name: result.user.displayName, email: result.user.email,
        })),
        tap((result) => {
          this.localStorageService.setItem(LocalStorageKeysEnum.USER, JSON.stringify(result));
          this.router.navigateByUrl(`/${NavigationEnum.Dashboard}`);
        }),
      ))),
  );

  logout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authLogout),
        tap(() => {
          this.localStorageService.setItem(LocalStorageKeysEnum.USER, null);
          this.router.navigateByUrl(`/${NavigationEnum.Login}`);
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private router: Router,
    private auth: AuthService,
  ) { }
}
