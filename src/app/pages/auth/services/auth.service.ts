import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable, of } from 'rxjs';

import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public login(email: string, password: string) {
    return from(this.fireAuth.signInWithEmailAndPassword(email, password));
  }

  public sign(): void {
    localStorage.setItem('token', 'token');
  }

  public signOut(): void {
    localStorage.removeItem('token');
  }

  public getUser(): Observable<User> {
    return of({
      name: 'John',
      lastName: 'Smith'
    });
  }

  constructor(private fireAuth: AngularFireAuth) {

  }
}
