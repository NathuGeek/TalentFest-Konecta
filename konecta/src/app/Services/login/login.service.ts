import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserCredentials, UserLoginResponse } from '../../Definitions/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logIn(credentials: UserCredentials): Observable<UserLoginResponse> {
    return of({token: ''})
    // return this.http.post<UserLoginResponse>('' , credentials)
  }
}
