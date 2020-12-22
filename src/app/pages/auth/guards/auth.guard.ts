import { LocalStorageService } from '@oksoftware/core/core.module';
import { LocalStorageKeysEnum } from '@oksoftware/shared/enums/local-storage.enum';

import { routes } from '../../../consts';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  public routers: typeof routes = routes;

  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = JSON.parse(this.localStorageService.getItem(LocalStorageKeysEnum.USER));

    if (user) {
      return true;
    }
    this.router.navigate([this.routers.LOGIN]);
  }
}
