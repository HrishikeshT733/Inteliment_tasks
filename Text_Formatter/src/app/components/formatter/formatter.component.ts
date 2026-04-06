
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextService } from '../../services/text.service';
import { FormattingService } from '../../services/formatting.service';
import { Subscription } from 'rxjs';
import { RemoveSpecialCharPipe } from '../../pipes/remove-special-char.pipe';
@Component({
  selector: 'app-formatters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.css'],
  providers:[RemoveSpecialCharPipe]
})
export class FormattersComponent implements OnInit, OnDestroy {
  currentText: string = '';
  selectedColor: string = '#000000';
  charCount: number = 0;
  wordCount: number = 0;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private RemoveSpecialCharPipe:RemoveSpecialCharPipe,
    private textService: TextService,
    private formattingService: FormattingService
  ) {}

  ngOnInit(): void {
    // Subscribe to OUTPUT text for formatting operations
    this.subscriptions.add(
      this.textService.outputText$.subscribe(text => {
        this.currentText = text;
      })
    );

    // Subscribe to counts
    this.subscriptions.add(
      this.textService.charCount$.subscribe(count => {
        this.charCount = count;
      })
    );

    this.subscriptions.add(
      this.textService.wordCount$.subscribe(count => {
        this.wordCount = count;
      })
    );
  }

  // Text formatting functions - these work on output text only
  removeWhiteSpace(): void {
    const formattedText = this.currentText.replace(/\s+/g, ' ').trim();
    this.textService.updateOutputText(formattedText);
  }

  reverseAll(): void {
    const reversedText = this.currentText.split(' ').reverse().join(' ');
    this.textService.updateOutputText(reversedText);
  }

  removeSpecialChars(): void {
    const cleanedText = this.RemoveSpecialCharPipe.transform(this.currentText);
    this.textService.updateOutputText(cleanedText);
  }

  capitalizeWord(): void {
    const capitalizedText = this.currentText.toUpperCase();
    this.textService.updateOutputText(capitalizedText);
  }

  clearAll(): void {
    this.textService.resetAll();
  }

  // Styling functions
  toggleBold(): void {
    this.formattingService.toggleBold();
  }

  toggleItalic(): void {
    this.formattingService.toggleItalic();
  }

  toggleUnderline(): void {
    this.formattingService.toggleUnderline();
  }

  changeColor(color: string): void {
    this.selectedColor = color;
    this.formattingService.changeColor(color);
  }

  increaseFontSize(): void {
    this.formattingService.increaseFontSize();
  }

  decreaseFontSize(): void {
    this.formattingService.decreaseFontSize();
  }

  removeStyling(): void {
    this.formattingService.removeStyling();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}