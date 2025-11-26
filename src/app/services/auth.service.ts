import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from '../models/login-dto';
import {BehaviorSubject, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:9090/auth';
  private tokenKey = 'token';

  constructor(private http: HttpClient) { }

  public isLoggedIn$:BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.hasToken());

  login(loginDto: LoginDto){
    return this
      .http
      .post(
        `${this.apiUrl}/bejelentkezes`,
        loginDto,
        {responseType: 'text'})
      .pipe(
        tap(token => {
          localStorage.setItem(this.tokenKey, token);
          this.isLoggedIn$.next(true);
        })
      );
  }

  logout(){
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn$.next(false);
  }

  getToken(): string | null{
    return localStorage.getItem(this.tokenKey)
  }

  private hasToken():boolean{
    return !!localStorage.getItem(this.tokenKey);
  }

}
