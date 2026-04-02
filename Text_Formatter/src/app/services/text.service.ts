// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TextService {
//   private textSubject = new BehaviorSubject<string>('');
//   public text$ = this.textSubject.asObservable();
  
//   private wordCountSubject = new BehaviorSubject<number>(0);
//   public wordCount$ = this.wordCountSubject.asObservable();
  
//   private charCountSubject = new BehaviorSubject<number>(0);
//   public charCount$ = this.charCountSubject.asObservable();

//   constructor() { }

//   updateText(text: string): void {
//     this.textSubject.next(text);
//     this.updateCounts(text);
//   }

//   private updateCounts(text: string): void {
//     // Character count
//     this.charCountSubject.next(text.length);
    
//     // Word count
//     const words = text.trim() === '' ? [] : text.trim().split(/\s+/);
//     this.wordCountSubject.next(words.length);
//   }

//   getText(): Observable<string> {
//     return this.text$;
//   }

//   getWordCount(): Observable<number> {
//     return this.wordCount$;
//   }

//   getCharCount(): Observable<number> {
//     return this.charCount$;
//   }
// }




import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  // Original input text (what user types)
  private inputTextSubject = new BehaviorSubject<string>('');
  public inputText$ = this.inputTextSubject.asObservable();
  
  // Formatted output text (after transformations)
  private outputTextSubject = new BehaviorSubject<string>('');
  public outputText$ = this.outputTextSubject.asObservable();
  
  // Counts based on output text (or input text, depending on your need)
  private wordCountSubject = new BehaviorSubject<number>(0);
  public wordCount$ = this.wordCountSubject.asObservable();
  
  private charCountSubject = new BehaviorSubject<number>(0);
  public charCount$ = this.charCountSubject.asObservable();

  constructor() { }

  // Update input text (when user types)
  updateInputText(text: string): void {
    this.inputTextSubject.next(text);
    // By default, output text follows input text
    this.updateOutputText(text);
  }

  // Update output text (after formatting operations)
  updateOutputText(text: string): void {
    this.outputTextSubject.next(text);
    this.updateCounts(text);
  }

  // Get current input text value (for operations)
  getCurrentInputText(): string {
    return this.inputTextSubject.value;
  }

  // Get current output text value
  getCurrentOutputText(): string {
    return this.outputTextSubject.value;
  }

  private updateCounts(text: string): void {
    // Character count
    this.charCountSubject.next(text.length);
    
    // Word count
    const words = text.trim() === '' ? [] : text.trim().split(/\s+/);
    this.wordCountSubject.next(words.length);
  }

  // Observable getters
  getInputText(): Observable<string> {
    return this.inputText$;
  }

  getOutputText(): Observable<string> {
    return this.outputText$;
  }

  getWordCount(): Observable<number> {
    return this.wordCount$;
  }

  getCharCount(): Observable<number> {
    return this.charCount$;
  }

  // Reset everything
  resetAll(): void {
    this.inputTextSubject.next('');
    this.outputTextSubject.next('');
    this.updateCounts('');
  }
}