import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from 'src/app/shared/types/login-register.interface';
import { RegisterRequest } from 'src/app/shared/types/register-request';
import { UserInterface } from 'src/app/shared/types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  registerUser(data: RegisterRequest): Observable<UserInterface> {
    return new Observable((observer) => {
      observer.next({
        id: '1',
        email: 'bilal.khatab@outlook.fr',
        password: '123456',
        username: 'bilalkh1',
        token: 'Token 1111',
        bio: 'Description',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
  }

  login(data: LoginRequest): Observable<UserInterface> {
    return new Observable((observer) => {
      observer.next({
        id: '1',
        email: 'bilal.khatab@outlook.fr',
        password: '123456',
        username: 'bilalkh1',
        token: 'Token 1111',
        bio: 'Description',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
  }

  getCurrentUser(): Observable<UserInterface> {
    return new Observable((observer) => {
      observer.next({
        id: '1',
        email: 'bilal.khatab@outlook.fr',
        password: '123456',
        username: 'bilalkh1',
        token: 'Token 1111',
        bio: 'Description',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }); 
  }


}
