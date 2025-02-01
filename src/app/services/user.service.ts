import { inject, Injectable } from '@angular/core';
import { ApiConfigService } from './api-config/api-config.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = inject(ApiConfigService);
  private http = inject(HttpClient);
    

  getUserById(id: string): Observable<User> {
    return this.http.get<any>(`${this.api.apiUsers}/get-user/${id}`);
  }
}
