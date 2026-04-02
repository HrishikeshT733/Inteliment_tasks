import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResponse {
  data?: any;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  fetchData(resource: string, id: string): Observable<any> {
    const endpoint = resource === 'photos' ? 'photos' : 
                     resource === 'comments' ? 'comments' : 
                     resource === 'albums' ? 'albums' : 'todos';
    return this.http.get(`${this.url}/${endpoint}/${id}`);
  }

  createPost(userId: string, body: string): Observable<any> {
    return this.http.post(`${this.url}/posts`, { body: body, userId: userId });
  }

  updatePost(id: string, body: string): Observable<any> {
    return this.http.put(`${this.url}/posts/${id}`, { body: body });
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(`${this.url}/posts/${id}`);
  }
}