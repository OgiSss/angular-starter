import { routes } from '../../../../consts';
import { AuthFacade } from '../../store/facades';

import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;

  constructor(private authFacade: AuthFacade) { }

  public sendLoginForm(email: string, password: string): void {
    this.authFacade.login(email, password);
  }

  public sendSignForm(): void {
    // this.service.sign();

    // this.router.navigate([this.routers.DASHBOARD]).then();
  }
}
