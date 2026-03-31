import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private textSubject = new BehaviorSubject<string>('');
  public text$ = this.textSubject.asObservable();
  
  private wordCountSubject = new BehaviorSubject<number>(0);
  public wordCount$ = this.wordCountSubject.asObservable();
  
  private charCountSubject = new BehaviorSubject<number>(0);
  public charCount$ = this.charCountSubject.asObservable();

  constructor() { }

  updateText(text: string): void {
    this.textSubject.next(text);
    this.updateCounts(text);
  }

  private updateCounts(text: string): void {
    // Character count
    this.charCountSubject.next(text.length);
    
    // Word count
    const words = text.trim() === '' ? [] : text.trim().split(/\s+/);
    this.wordCountSubject.next(words.length);
  }

  getText(): Observable<string> {
    return this.text$;
  }

  getWordCount(): Observable<number> {
    return this.wordCount$;
  }

  getCharCount(): Observable<number> {
    return this.charCount$;
  }
}