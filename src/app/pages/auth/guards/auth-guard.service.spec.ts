
import { AppState } from '@oksoftware/core/core.state';

import { AuthState } from '../store/models/auth.models';
import { selectIsAuthenticated } from '../store/selectors/auth.selectors';

import { AuthGuardService } from './auth-guard.service';

import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('AuthGuardService', () => {
  let authGuardService: AuthGuardService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService, provideMockStore()],
    });
    authGuardService = TestBed.inject<AuthGuardService>(AuthGuardService);
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectIsAuthenticated, true);
  });

  it('should be created', () => {
    expect(authGuardService).toBeTruthy();
  });

  it('should return isAuthenticated from authState', () => {
    authGuardService.canActivate().subscribe((canActivate) => {
      expect(canActivate).toBe(true);
    });
  });
});

const createState = (authState: AuthState) =>
({
  auth: authState,
} as AppState);
