import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TextService } from '../../services/text.service';
import { FormattingService } from '../../services/formatting.service';

@Component({
  selector: 'app-text-display',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent implements OnInit, OnDestroy {
  inputText: string = '';
  outputText: string = '';
  // wordCount: number = 0;
  // charCount: number = 0;
  formatting: any = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
    color: '#000000',
    fontSize: 16
  };
  
  private subscriptions: Subscription = new Subscription();

  constructor(
    private textService: TextService,
    private formattingService: FormattingService
  ) { }

  ngOnInit(): void {
    // Subscribe to text changes
    this.subscriptions.add(
      this.textService.text$.subscribe(text => {
        this.inputText = text;
        this.outputText = text;
      })
    );
    
  
    
    // Subscribe to formatting changes
    this.subscriptions.add(
      this.formattingService.formatting$.subscribe(formatting => {
        this.formatting = formatting;
      })
    );
  }

  onTextInput(event: any): void {
    this.textService.updateText(event.target.value);
  }

  clearAll(): void {
    this.textService.updateText('');
  }

  getTextStyle(): any {
    return {
      'font-weight': this.formatting.isBold ? 'bold' : 'normal',
      'font-style': this.formatting.isItalic ? 'italic' : 'normal',
      'text-decoration': this.formatting.isUnderline ? 'underline' : 'none',
      'color': this.formatting.color,
      'font-size': this.formatting.fontSize + 'px'
    };
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}