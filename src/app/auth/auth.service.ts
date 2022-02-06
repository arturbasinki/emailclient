import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

interface UsernameAvailableResponse {
  avilable: boolean;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}
interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      `${this.rootUrl}/auth/username`,
      {
        username, //username: username
      }
    );
  }
  signup(credentials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(
        `${this.rootUrl}/auth/signup`,
        credentials
        // {withCredentials: true,
        // withCredentials ensures that any request with cookies will be sored this cookies}
      )
      .pipe(tap(() => [this.signedin$.next(true)]));
  }

  checkAuth() {
    return this.http
      .get<SignedinResponse>(
        `${this.rootUrl}/auth/signedin`
        // { withCredentials: true }
      )
      .pipe(
        tap(({ authenticated }) => {
          // console.log(authenticated);
          this.signedin$.next(authenticated);
        })
      );
  }
}
