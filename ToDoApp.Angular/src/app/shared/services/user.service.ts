import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Users } from '../../utils/models/users.model';
import { ApiResponse } from '../../utils/models/api-response.model';
import { constants } from '../../utils/constants/app.contants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient) { }

  getUserByName(username: string): Observable<ApiResponse<Users>> {
    return this.http.get<ApiResponse<Users>>(`${this.baseUrl}/getUser/${username}`);
  }
}
