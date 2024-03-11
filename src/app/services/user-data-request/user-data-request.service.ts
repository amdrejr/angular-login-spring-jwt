import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataRequestService {

  private url: string = 'http://localhost:8080/users';
  private token: string | null = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.url, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
  }

  getUserById(id: number):Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
  }
}


interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;
}
