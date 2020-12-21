import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { routes } from '../../../../consts';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/models/auth.models';
import * as fromActions from '../../store/actions/auth.actions';
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;

  constructor(
    private service: AuthService,
    private router: Router,
    private store: Store<AuthState>
  ) { }

  public sendLoginForm(email: string, password: string): void {
    this.store.dispatch(fromActions.authLogin({ email, password }))

    // this.router.navigate([this.routers.DASHBOARD]).then();
  }

  public sendSignForm(): void {
    this.service.sign();

    this.router.navigate([this.routers.DASHBOARD]).then();
  }
}
