import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpecialChar',
  standalone: true
})
export class RemoveSpecialCharPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    // Remove special characters but keep letters, numbers, and spaces
    return value.replace(/[^a-zA-Z0-9\s]/g, '');
  }
}