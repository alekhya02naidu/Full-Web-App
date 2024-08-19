import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../../utils/models/users.model';
import { ApiResponse } from '../../utils/models/api-response.model';
import { constants } from '../../utils/constants/app.contants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = `${environment.apiUrl}/account`; 

  constructor(private http: HttpClient) {
  }

  register(users: Users): Observable<any> {
    return this.http.post<ApiResponse<number>>(`${this.baseUrl}/signUp`, users);
  }

  login(username: string, passwordHash: string): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.baseUrl}/signIn`, { username, passwordHash });
  }  
}
