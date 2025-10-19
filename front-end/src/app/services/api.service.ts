import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // this will point to your Render JSON server later
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/employees`);
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/employees`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
  return this.http.delete<any>(`${this.baseUrl}/employees/${id}`);
 }
}
