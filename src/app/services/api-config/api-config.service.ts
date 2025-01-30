import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  private readonly baseUrl: string = 'https://localhost:7123/api';

  get apiUrl() {
    return this.baseUrl
  }

  get apiShortUrls() {
    return `${this.baseUrl}/ShortUrls`;
  }

  get apiUsers() {
    return `${this.baseUrl}/Users`;
  }

  get apiAuthLoginUrl() {
    return `${this.baseUrl}/Auth/login`;
  }

  get apiAuthRegisterUrl() {
    return `${this.baseUrl}/Auth/register`;
  }

  get apiAuthRefreshUrl() {
    return `${this.baseUrl}/Auth/refresh-token`;
  }
}
