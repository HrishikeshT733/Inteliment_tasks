

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {

  userId: string = '';
  inputBody: string = '';
  responseData: any = null;
  errorMsg: string = '';
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  private isIdValid(): boolean {
    if (!this.userId.trim()) {
      this.errorMsg = "User Id is empty! Please provide a valid ID.";
      this.responseData = null;
      return false;
    }
    this.errorMsg = '';
    return true;
  }

  fetch(resource: string) {
    if (!this.isIdValid()) return;
    // Map to specific JSONPlaceholder endpoints
    const endpoint = resource === 'photos' ? 'photos' : 
                     resource === 'comments' ? 'comments' : 
                     resource === 'albums' ? 'albums' : 'todos';
                     
    this.http.get(`${this.url}/${endpoint}/${this.userId}`).subscribe({
      next: (res) => this.responseData = res,
      error: (err) => this.errorMsg = `API Error: ${err.message}`
    });
  }

  onCreate() {
    if (!this.isIdValid()) return;
    this.http.post(`${this.url}/posts`, { body: this.inputBody, userId: this.userId }).subscribe({
      next: (res) => this.responseData = res,
      error: (err) => this.errorMsg = err.message
    });
  }

  onUpdate() {
    if (!this.isIdValid()) return;
    this.http.put(`${this.url}/posts/${this.userId}`, { body: this.inputBody }).subscribe({
      next: (res) => this.responseData = res,
      error: (err) => this.errorMsg = err.message
    });
  }

  onDelete() {
    if (!this.isIdValid()) return;
    this.http.delete(`${this.url}/posts/${this.userId}`).subscribe({
      next: () => this.responseData = { status: "Success", message: `ID ${this.userId} was deleted (faked)` },
      error: (err) => this.errorMsg = err.message
    });
  }
}