import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../api-config/api-config.service';
import { User } from '../../models/user.type';

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
