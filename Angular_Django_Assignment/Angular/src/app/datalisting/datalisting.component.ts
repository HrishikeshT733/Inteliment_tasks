import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-datalisting',
  imports: [CommonModule,FormsModule],
  templateUrl: './datalisting.component.html',
  styleUrl: './datalisting.component.scss'
})
export class DatalistingComponent implements OnInit{
records: any[] = [];   
  isLoading    = false;
  errorMessage = '';
  filteredRecords: any[] = [];
  searchId: number | null = null;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadRecords();
  }

    filterRecords() {
    if (!this.searchId) {
      this.filteredRecords = [...this.records];
    } else {
      this.filteredRecords = this.records.filter(record => 
        record.id === this.searchId
      );
    }
  }
 

  loadRecords() {
    this.isLoading = true;
    this.api.getRecords().subscribe({
      next: (data) => {
        this.records = data;
        this.filteredRecords = [...data]; 
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error loading records';
        this.isLoading = false;
      }
    });
  }
}
