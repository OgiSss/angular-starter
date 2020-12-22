import { authLogin, authLogout } from '../actions/auth.actions';
import { AuthState } from '../models/auth.models';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthFacade {
    // selectAuth$ = this.store.select(selectAuth);
    // selectIsAuthenticated$ = this.store.select(selectIsAuthenticated);

    constructor(private store: Store<AuthState>) { }

    login(email: string, password: string) {
        this.store.dispatch(authLogin({ email, password }));
    }

    logout() {
        this.store.dispatch(authLogout());
    }
}
