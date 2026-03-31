import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextService } from '../../services/text.service';
import { FormattingService } from '../../services/formatting.service';

@Component({
  selector: 'app-formatters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.css']
})
export class FormattersComponent {
  currentText: string = '';
  selectedColor: string = '#000000';

  constructor(
    private textService: TextService,
    private formattingService: FormattingService
  ) {
    this.textService.text$.subscribe(text => {
      this.currentText = text;
    });
  }

  // Text formatting functions
  removeWhiteSpace(): void {
    const formattedText = this.currentText.replace(/\s+/g, ' ').trim();
    this.textService.updateText(formattedText);
  }

  reverseAll(): void {
    const reversedText = this.currentText.split(' ').reverse().join(' ');
    this.textService.updateText(reversedText);
  }

  removeSpecialChars(): void {
    const cleanedText = this.currentText.replace(/[^a-zA-Z0-9\s]/g, '');
    this.textService.updateText(cleanedText);
  }

  capitalizeWord(): void {
    const capitalizedText = this.currentText.replace(/\b\w/g, char => char.toUpperCase());
    this.textService.updateText(capitalizedText);
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
}