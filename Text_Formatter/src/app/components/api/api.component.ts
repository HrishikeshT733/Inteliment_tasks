

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent{

  userId: string = '';
  inputBody: string = '';
  responseData: any = null;
  errorMsg: string = '';

  constructor(private apiService: ApiService) {}

  private isIdValid(): boolean {
    if (!this.userId.trim()) {
      this.errorMsg = "User Id is empty! Please provide a valid ID.";
      this.responseData = null; // Clear response data when showing error
      return false;
    }
    return true;
  }

  private clearErrorAndResponse() {
    this.errorMsg = '';
    this.responseData = null;
  }

  fetch(resource: string) {
    this.clearErrorAndResponse();
    if (!this.isIdValid()) return;
    
    this.apiService.fetchData(resource, this.userId).subscribe({
      next: (res) => {
        this.responseData = res;
        this.errorMsg = ''; // Ensure error is empty when showing response
      },
      error: (err) => {
        this.errorMsg = `API Error: ${err.message}`;
        this.responseData = null; // Clear response when showing error
      }
    });
  }

  onCreate() {
    this.clearErrorAndResponse();
    if (!this.isIdValid()) return;
    
    this.apiService.createPost(this.userId, this.inputBody).subscribe({
      next: (res) => {
        this.responseData = res;
        this.errorMsg = ''; // Ensure error is empty when showing response
      },
      error: (err) => {
        this.errorMsg = err.message;
        this.responseData = null; // Clear response when showing error
      }
    });
  }

  onUpdate() {
    this.clearErrorAndResponse();
    if (!this.isIdValid()) return;
    
    this.apiService.updatePost(this.userId, this.inputBody).subscribe({
      next: (res) => {
        this.responseData = res;
        this.errorMsg = ''; // Ensure error is empty when showing response
      },
      error: (err) => {
        this.errorMsg = err.message;
        this.responseData = null; // Clear response when showing error
      }
    });
  }

  onDelete() {
    this.clearErrorAndResponse();
    if (!this.isIdValid()) return;
    
    this.apiService.deletePost(this.userId).subscribe({
      next: () => {
        this.responseData = { status: "Success", message: `ID ${this.userId} was deleted (faked)` };
        this.errorMsg = ''; // Ensure error is empty when showing response
      },
      error: (err) => {
        this.errorMsg = err.message;
        this.responseData = null; // Clear response when showing error
      }
    });
  }
}