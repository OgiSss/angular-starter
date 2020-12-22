
import { LocalStorageKeysEnum } from '@oksoftware/shared/enums/local-storage.enum';

import { User } from '../models';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public login(email: string, password: string): Observable<any> {
    return from(this.fireAuth.signInWithEmailAndPassword(email, password));
  }

  public sign(): void {
    localStorage.setItem('token', 'token');
  }

  public signOut(): void {
    // this.localStorageService.removeItem(LocalStorageKeysEnum.USER);
  }

  public getUser(): Observable<User> {
    return of({
      name: 'John',
      lastName: 'Smith',
    });
  }

  constructor(private fireAuth: AngularFireAuth) {

  }
}
