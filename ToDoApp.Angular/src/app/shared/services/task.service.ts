import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { constants } from '../../utils/constants/app.contants';
import { Tasks } from '../../utils/models/tasks.model';
import { ApiResponse } from '../../utils/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl: string = `${environment.apiUrl}/task`;
  constructor(private http: HttpClient) { }
  
  getAllTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.baseUrl);
  }

  addTask(task: Tasks): Observable<ApiResponse<number>> {
    return this.http.post<ApiResponse<number>>(this.baseUrl, task);
  }

  getUserSpecificTask(): Observable<ApiResponse<Tasks[]>> {
    const userId = localStorage.getItem(constants.USER_ID);
    return this.http.get<ApiResponse<Tasks[]>>(`${this.baseUrl}/${userId}`);
  }

  updateTask(task: Tasks): Observable<ApiResponse<number>> {
    return this.http.put<ApiResponse<number>>(`${this.baseUrl}/${task.id}`, task);
  }

  deleteTasks(ids: number[]): Observable<ApiResponse<number>> {
    return this.http.post<ApiResponse<number>>(`${this.baseUrl}/delete-multiple`, ids);
  }
}
