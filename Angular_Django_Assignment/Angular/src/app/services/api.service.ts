
import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable }  from 'rxjs';

@Injectable({
  providedIn: 'root'  // Available everywhere in the app
})
export class ApiService {


  private baseUrl = 'http://localhost:8000/api';

  
  constructor(private http: HttpClient) { }

  submitForm(formData: object): Observable<any> {
    return this.http.post(`${this.baseUrl}/submit/`, formData);
  }

  
  getRecords(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/records/`);
  }
}
