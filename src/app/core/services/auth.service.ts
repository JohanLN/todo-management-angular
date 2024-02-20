import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiEndpoint } from '../constants/constants';
import { ILogin, ILoginResponse } from '../models/auth.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  onLogin(data: ILogin) {
    console.log('onLogin', data);
    return this.httpClient
      .post<ILoginResponse>(`${apiEndpoint.AuthEndpoint.login}`, data)
      .pipe(
        map((response) => {
          console.log('???? ==>', response);
          if (response) {
            console.log('response ==>', response.token);
            this.tokenService.setToken(response.token);
          }

          return response;
        })
      );
  }

  onLogout() {
    this.httpClient.post(`${apiEndpoint.AuthEndpoint.logout}`, '').subscribe({
      next: (response) => {
        if (response) {
          this.tokenService.removeToken();
        }
      },
    });
  }
}
