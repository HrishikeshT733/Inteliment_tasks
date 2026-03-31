import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormattingService {
  private formattingOptions = new BehaviorSubject<any>({
    isBold: false,
    isItalic: false,
    isUnderline: false,
    color: '#000000',
    fontSize: 16
  });
  
  formatting$ = this.formattingOptions.asObservable();

  constructor() { }

  toggleBold(): void {
    const current = this.formattingOptions.value;
    this.formattingOptions.next({ ...current, isBold: !current.isBold });
  }

  toggleItalic(): void {
    const current = this.formattingOptions.value;
    this.formattingOptions.next({ ...current, isItalic: !current.isItalic });
  }

  toggleUnderline(): void {
    const current = this.formattingOptions.value;
    this.formattingOptions.next({ ...current, isUnderline: !current.isUnderline });
  }

  changeColor(color: string): void {
    const current = this.formattingOptions.value;
    this.formattingOptions.next({ ...current, color: color });
  }

  increaseFontSize(): void {
    const current = this.formattingOptions.value;
    this.formattingOptions.next({ ...current, fontSize: current.fontSize + 1 });
  }

  decreaseFontSize(): void {
    const current = this.formattingOptions.value;
    if (current.fontSize > 8) {
      this.formattingOptions.next({ ...current, fontSize: current.fontSize - 1 });
    }
  }

  removeStyling(): void {
    this.formattingOptions.next({
      isBold: false,
      isItalic: false,
      isUnderline: false,
      color: '#000000',
      fontSize: 16
    });
  }

  getCurrentFormatting() {
    return this.formattingOptions.value;
  }
}