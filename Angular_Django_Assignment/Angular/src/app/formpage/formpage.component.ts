import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-formpage',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formpage.component.html',
  styleUrl: './formpage.component.scss'
})
export class FormpageComponent implements OnInit{
    myForm!:FormGroup;
    isLoading!:boolean;
    successMessage!:string;
    errorMessage!:string


   constructor(
    private api:ApiService
   ){}
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      age:new FormControl('',[Validators.required,Validators.min(1),Validators.max(150)]),
      gender:new FormControl('male',Validators.required)

    });


  }
  onSubmit(): void {
    
    if (this.myForm.invalid) return;

    this.isLoading     = true;
    this.successMessage = '';
    this.errorMessage   = '';

    // Send data to Django via ApiService
    this.api.submitForm(this.myForm.value).subscribe({

      // Success: Django returned 201
      next: (response) => {
        this.isLoading      = false;
        this.successMessage = response.message || 'Submitted successfully!';
        this.myForm.reset();   // Clear the form
      },

      // Error: Django returned 400 or 500
      error: (err) => {
        this.isLoading    = false;
        this.errorMessage = 'Submission failed. Please check your inputs.';
        console.error(err);
      }

    });
  }

}
